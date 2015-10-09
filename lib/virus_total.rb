module VirusTotal

  require 'logger'
  require 'faraday_middleware'


  def self.make_request_body(resource_name, api_key, scan_new_resources = false)
    scan = scan_new_resources == true ? 1: 0
    { resource: resource_name, apikey: api_key, scan: scan }
  end

  def self.send_request(data)
    #puts 'im in send request'
    loop do
      conn = Faraday.new(:url => configatron.virus_total.endpoint) do |faraday|
        faraday.request  :multipart             # form-encode POST params
        faraday.request  :url_encoded             # form-encode POST params
        faraday.response :json                  # log requests to STDOUT
        faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
      end
      response = conn.post '', data
      # Rails.logger.debug 'response body:'
      # Rails.logger.debug response.body

      return response unless response.body.blank?

      # Rails.logger.debug 'gonna sleep:'
      sleep 65.seconds
    end
  end

end