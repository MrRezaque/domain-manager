class CheckDomainBanJob < ActiveJob::Base

  queue_as :default

  require 'faraday_middleware'
  require 'virus_total'

  def perform
    perform_job
  end

  def perform_job

    keylists = Keylist.where(active: true)
    logger.debug 'active keylists: '
    logger.debug keylists

    keylists.each do |list|
      update_resources_status(list)
    end

    write_file
  end

  def update_resources_status(keylist)

    #generate check token
    #check_token = SecureRandom.uuid.to_s

    logger.debug "update resources status: "
    logger.debug keylist

    active_resources = Resource.where(status: 'active', keylist_id: keylist.id)
    #means current active resource is still ok, no need to check others
    return if check_resources(active_resources)

    pending_resources = Resource.where(status: 'pending', keylist_id: keylist.id)
    check_resources(pending_resources)

  end

  def check_resources(resources)

    resources.each do |resource|
      logger.debug 'process current resource: '
      logger.debug resource
      result = check_resource(resource)
      if resource_allowed?(result)
        logger.debug "resource #{result} is allowed"
        resource.activate unless resource.status == 'active'
        #returns true if one of resources activated successfully
        return true
      else
        logger.debug "resource #{result} is NOT allowed, desided to ban it"
        #refactor: ban resource, not resource model?
        #ban_resource(result['resource_model']);
        resource.ban
      end
    end

    false
  end

  def check_resource(resource)
    logger.debug 'gonna check resource'
    request_body = VirusTotal.make_request_body(resource.name, configatron.virus_total.api_key, false)
    logger.debug 'gonna send request'
    result = VirusTotal.send_request(request_body).body
    logger.debug 'result found'
    logger.debug "gonna return result #{result}"
    result
  end

  # def send_request(data)
  #   puts 'im in send request'
  #   loop do
  #     conn = Faraday.new(:url => configatron.virus_total.endpoint) do |faraday|
  #       faraday.request  :multipart             # form-encode POST params
  #       faraday.request  :url_encoded             # form-encode POST params
  #       faraday.response :json                  # log requests to STDOUT
  #       faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
  #     end
  #     response = conn.post '', data
  #     logger.debug 'response body:'
  #     logger.debug response.body
  #
  #     return response unless response.body.blank?
  #
  #     logger.debug 'gonna sleep:'
  #     sleep 65.seconds
  #   end
  # end

  def resource_allowed?(scan_result)
    logger.debug scan_result
    (scan_result['response_code'] < 1) || !contains_in_bases?(scan_result)
  end

  def contains_in_bases?(scan_results)
    result = false
    bases = ['Google Safebrowsing', 'Fortinet', 'ESET', 'Kaspersky', 'Opera', 'Yandex Safebrowsing', 'Dr.Web' ]
    bases.each do |base_name|
      base_result = scan_results['scans'][base_name]
      logger.debug "base name: #{base_name}, base result: #{base_result}"
      unless base_result.blank?
        if base_result['detected']
          logger.debug "base name: #{base_name}, detected: #{base_name['detected']}"
          result = true
          break
        end
      end
    end

    result
  end



  def write_file

    filename = configatron.script.output_dir + '/' + configatron.script.file_name
    code = File.open Rails.root.to_s + '/script/code.js', 'r'

    data = extract_data_to_write + code.read
    logger.debug 'write that shit: '
    logger.debug "#{data}"
    logger.debug "to file #{filename}"

    File.open filename, 'w' do |f|
      f.write data.to_s
    end

    logger.debug 'written '
    data

  end

  def extract_data_to_write

    #active_resources = Resource.where(status: 'active')

    site_keywords = 'var siteKeywords = {'

    logger.debug 'eager load resources:'
    keylists = Keylist.where(active: true).eager_load(:resources).where("resources.status = 'active'")

    resources_arr = []
    str_arr = []
    keylists.each do |keylist|
      resource = keylist.resources[0]
      unless resource.blank?
        str_arr << "'#{resource.name}': '#{keylist.keywords}' "
        resources_arr << resource.name
      end
    end

    site_keywords += str_arr.join(', ')
    site_keywords += '};' + "\n"

    forb_resources = ForbiddenResource.all

    forbidden_pages = 'var forbiddenPages = ['
    str_arr = []
    forb_resources.each do |res|
      str_arr << "'#{res.name}' "
    end
    resources_arr.each do |res|
      str_arr << "'#{res}'"
    end

    forbidden_pages += str_arr.join(', ')
    forbidden_pages += ' ]; ' + "\n"

    result = site_keywords + forbidden_pages

    result
  end


end
