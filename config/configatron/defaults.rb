# Put all your default configatron settings here.

# Example:
#   configatron.emails.welcome.subject = 'Welcome!'
#   configatron.emails.sales_reciept.subject = 'Thanks for your order'
#
#   configatron.file.storage = :s3
configatron.virus_total.api_key  = 'c323fc5b1d2d499c3136080ff355702cdce66bdeff0f010cd2990f7ab6348cdf'
configatron.virus_total.endpoint = 'https://www.virustotal.com/vtapi/v2/url/report'

configatron.script.output_dir = Rails.root.to_s + '/public'
configatron.script.file_name  = 'script.js'