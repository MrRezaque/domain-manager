module KeylistsHelper

  def current_keylist_message(keylist)

    if keylist.active
      #active_resource = keylist.resources.where(status: 'active')[0]
      active_resource = keylist.resources.to_a.select { |resource| resource.status == 'active' }.first

      if active_resource.blank?
        #pending_resource = keylist.resources.where(status: 'pending')[0]
        pending_resource = keylist.resources.to_a.select { |resource| resource.status == 'pending' }.first
        if pending_resource.blank?
          return 'Внимание, для ключевых слов не заданны адреса'
        else
          return 'Ресурс ожидает обработки'
        end
      else
        return active_resource.name
      end
    else
      'Набор ключевых слов не активен'
    end
  end

  def resource_in_queue_cnt(keylist)
    resources = keylist.resources.to_a.select { |r| r.status == 'pending' }
    resources.count
  end

end
