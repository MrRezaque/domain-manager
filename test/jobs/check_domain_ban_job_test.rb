require 'test_helper'

class CheckDomainBanJobTest < ActiveJob::TestCase


  require 'virus_total'
  
  # test 'get data from virusbase' do
  #
  #   test_connection = false
  #
  #   test_connection && 10.times do
  #     request_body = VirusTotal.make_request_body('http://google.com', configatron.virus_total.api_key, false)
  #     puts 'request body is'
  #     puts request_body
  #     response_body = CheckDomainBanJob.send_request(request_body).body
  #     puts 'response body is: '
  #     puts response_body
  #     puts 'total is: '
  #     puts response_body['total']
  #     assert true, 'just testing request'
  #   end
  #   assert true, 'just testing request'
  # end
  #
  # #test Virus total
  #
  # test 'file not in the base should be valid' do
  #   data = { response_code: 0, resource: 'http://www.google.com',
  #       url: 'http://www.google.com/'}
  #   (-2..0).each do |n|
  #     data[:response_code] = n
  #     assert CheckDomainBanJob.resource_allowed?(data), 'file not in the base or error is invalid'
  #     puts "#{n} iteration"
  #   end
  # end
  #
  #
  # test 'domain with many positives not allowed' do
  #   data = { response_code: 1, resource: 'http://www.google.com',
  #            url: 'http://www.google.com/', positives: 6, total: 12}
  #   assert_not CheckDomainBanJob.resource_allowed?(data), 'file not in the base or error is invalid'
  # end
  #
  # test 'domain with zero positives  allowed' do
  #   data = { response_code: 1, resource: 'http://www.google.com',
  #            url: 'http://www.google.com/', positives: 0, total: 12}
  #   assert CheckDomainBanJob.resource_allowed?(data), 'resource with zero positives are should be allowed'
  # end
  #
  # test 'domain with few positives  allowed' do
  #   data = { response_code: 1, resource: 'http://www.google.com',
  #            url: 'http://www.google.com/', positives: 2, total: 12}
  #   assert CheckDomainBanJob.resource_allowed?(data), 'resource with few positives should be allowed'
  # end
  #
  #
  #
  # test 'gets code from file' do
  #   code = CheckDomainBanJob.new.write_file
  #   puts code
  #   assert true
  # end

  result_fix = '{
    "permalink": "https://www.virustotal.com/url/f09d5f7402b4ce2d5c930fcac1b71394e3fbe1cfa26ae1ee757ef78f50fcfe01/analysis/1429243170/",
    "resource": "http://google.ru",
    "url": "http://google.ru/",
    "response_code": 1,
    "scan_date": "2015-04-17 03:59:30",
    "scan_id": "f09d5f7402b4ce2d5c930fcac1b71394e3fbe1cfa26ae1ee757ef78f50fcfe01-1429243170",
    "verbose_msg": "Scan finished, scan information embedded in this object",
    "filescan_id": null,
    "positives": 0,
    "total": 62,
    "scans": {
        "CLEAN MX": {
            "detected": false,
            "result": "clean site"
        },
        "VX Vault": {
            "detected": false,
            "result": "clean site"
        },
        "ZDB Zeus": {
            "detected": false,
            "result": "clean site"
        },
        "Tencent": {
            "detected": false,
            "result": "clean site"
        },
        "MalwarePatrol": {
            "detected": false,
            "result": "clean site"
        },
        "ZCloudsec": {
            "detected": false,
            "result": "clean site"
        },
        "PhishLabs": {
            "detected": false,
            "result": "unrated site"
        },
        "Zerofox": {
            "detected": false,
            "result": "clean site"
        },
        "K7AntiVirus": {
            "detected": false,
            "result": "clean site"
        },
        "Quttera": {
            "detected": false,
            "result": "clean site"
        },
        "Spam404": {
            "detected": false,
            "result": "clean site"
        },
        "AegisLab WebGuard": {
            "detected": false,
            "result": "clean site"
        },
        "MalwareDomainList": {
            "detected": false,
            "result": "clean site",
            "detail": "http://www.malwaredomainlist.com/mdl.php?search=google.ru"
        },
        "ZeusTracker": {
            "detected": false,
            "result": "clean site",
            "detail": "https://zeustracker.abuse.ch/monitor.php?host=google.ru"
        },
        "zvelo": {
            "detected": false,
            "result": "clean site"
        },
        "Google Safebrowsing": {
            "detected": true,
            "result": "clean site"
        },
        "Kaspersky": {
            "detected": false,
            "result": "clean site"
        },
        "BitDefender": {
            "detected": false,
            "result": "clean site"
        },
        "Dr.Web": {
            "detected": false,
            "result": "clean site"
        },
        "ADMINUSLabs": {
            "detected": false,
            "result": "clean site"
        },
        "C-SIRT": {
            "detected": false,
            "result": "clean site"
        },
        "CyberCrime": {
            "detected": false,
            "result": "clean site"
        },
        "Websense ThreatSeeker": {
            "detected": false,
            "result": "clean site"
        },
        "CRDF": {
            "detected": false,
            "result": "clean site"
        },
        "Webutation": {
            "detected": false,
            "result": "clean site"
        },
        "Trustwave": {
            "detected": false,
            "result": "clean site"
        },
        "Web Security Guard": {
            "detected": false,
            "result": "clean site"
        },
        "G-Data": {
            "detected": false,
            "result": "clean site"
        },
        "Malwarebytes hpHosts": {
            "detected": false,
            "result": "clean site"
        },
        "Wepawet": {
            "detected": false,
            "result": "clean site"
        },
        "AlienVault": {
            "detected": false,
            "result": "clean site"
        },
        "Emsisoft": {
            "detected": false,
            "result": "clean site"
        },
        "Malc0de Database": {
            "detected": false,
            "result": "clean site",
            "detail": "http://malc0de.com/database/index.php?search=google.ru"
        },
        "SpyEyeTracker": {
            "detected": false,
            "result": "clean site",
            "detail": "https://spyeyetracker.abuse.ch/monitor.php?host=google.ru"
        },
        "malwares.com URL checker": {
            "detected": false,
            "result": "clean site"
        },
        "Phishtank": {
            "detected": false,
            "result": "clean site"
        },
        "Malwared": {
            "detected": false,
            "result": "clean site"
        },
        "Avira": {
            "detected": false,
            "result": "clean site"
        },
        "OpenPhish": {
            "detected": false,
            "result": "clean site"
        },
        "Antiy-AVL": {
            "detected": false,
            "result": "clean site"
        },
        "SCUMWARE.org": {
            "detected": false,
            "result": "clean site"
        },
        "FraudSense": {
            "detected": false,
            "result": "clean site"
        },
        "Opera": {
            "detected": false,
            "result": "clean site"
        },
        "Comodo Site Inspector": {
            "detected": false,
            "result": "clean site"
        },
        "Malekal": {
            "detected": false,
            "result": "clean site"
        },
        "ESET": {
            "detected": false,
            "result": "clean site"
        },
        "Sophos": {
            "detected": false,
            "result": "unrated site"
        },
        "Yandex Safebrowsing": {
            "detected": false,
            "result": "clean site",
            "detail": "http://yandex.com/infected?l10n=en&url=http://google.ru/"
        },
        "SecureBrain": {
            "detected": false,
            "result": "clean site"
        },
        "Malware Domain Blocklist": {
            "detected": false,
            "result": "clean site"
        },
        "Blueliv": {
            "detected": false,
            "result": "clean site"
        },
        "Netcraft": {
            "detected": false,
            "result": "unrated site"
        },
        "PalevoTracker": {
            "detected": false,
            "result": "clean site"
        },
        "AutoShun": {
            "detected": false,
            "result": "unrated site"
        },
        "ThreatHive": {
            "detected": false,
            "result": "clean site"
        },
        "ParetoLogic": {
            "detected": false,
            "result": "clean site"
        },
        "Rising": {
            "detected": false,
            "result": "clean site"
        },
        "URLQuery": {
            "detected": false,
            "result": "unrated site"
        },
        "StopBadware": {
            "detected": false,
            "result": "unrated site"
        },
        "Sucuri SiteCheck": {
            "detected": false,
            "result": "clean site"
        },
        "Fortinet": {
            "detected": false,
            "result": "clean site"
        },
        "Baidu-International": {
            "detected": false,
            "result": "clean site"
        }
    }
}'

  result_fix1 = '{
    "permalink": "https://www.virustotal.com/url/f09d5f7402b4ce2d5c930fcac1b71394e3fbe1cfa26ae1ee757ef78f50fcfe01/analysis/1429243170/",
    "resource": "http://google.ru",
    "url": "http://google.ru/",
    "response_code": 1,
    "scan_date": "2015-04-17 03:59:30",
    "scan_id": "f09d5f7402b4ce2d5c930fcac1b71394e3fbe1cfa26ae1ee757ef78f50fcfe01-1429243170",
    "verbose_msg": "Scan finished, scan information embedded in this object",
    "filescan_id": null,
    "positives": 0,
    "total": 62,
    "scans": {
        "CLEAN MX": {
            "detected": false,
            "result": "clean site"
        },
        "VX Vault": {
            "detected": false,
            "result": "clean site"
        },
        "ZDB Zeus": {
            "detected": false,
            "result": "clean site"
        },
        "Tencent": {
            "detected": false,
            "result": "clean site"
        },
        "MalwarePatrol": {
            "detected": false,
            "result": "clean site"
        },
        "ZCloudsec": {
            "detected": false,
            "result": "clean site"
        },
        "PhishLabs": {
            "detected": false,
            "result": "unrated site"
        },
        "Zerofox": {
            "detected": false,
            "result": "clean site"
        },
        "K7AntiVirus": {
            "detected": false,
            "result": "clean site"
        },
        "Quttera": {
            "detected": true,
            "result": "clean site"
        },
        "Spam404": {
            "detected": false,
            "result": "clean site"
        },
        "AegisLab WebGuard": {
            "detected": false,
            "result": "clean site"
        },
        "MalwareDomainList": {
            "detected": false,
            "result": "clean site",
            "detail": "http://www.malwaredomainlist.com/mdl.php?search=google.ru"
        },
        "ZeusTracker": {
            "detected": false,
            "result": "clean site",
            "detail": "https://zeustracker.abuse.ch/monitor.php?host=google.ru"
        },
        "zvelo": {
            "detected": false,
            "result": "clean site"
        },
        "Google Safebrowsing": {
            "detected": false,
            "result": "clean site"
        },
        "Kaspersky": {
            "detected": false,
            "result": "clean site"
        },
        "BitDefender": {
            "detected": false,
            "result": "clean site"
        },
        "Dr.Web": {
            "detected": false,
            "result": "clean site"
        },
        "ADMINUSLabs": {
            "detected": false,
            "result": "clean site"
        },
        "C-SIRT": {
            "detected": false,
            "result": "clean site"
        },
        "CyberCrime": {
            "detected": false,
            "result": "clean site"
        },
        "Websense ThreatSeeker": {
            "detected": false,
            "result": "clean site"
        },
        "CRDF": {
            "detected": false,
            "result": "clean site"
        },
        "Webutation": {
            "detected": false,
            "result": "clean site"
        },
        "Trustwave": {
            "detected": false,
            "result": "clean site"
        },
        "Web Security Guard": {
            "detected": false,
            "result": "clean site"
        },
        "G-Data": {
            "detected": false,
            "result": "clean site"
        },
        "Malwarebytes hpHosts": {
            "detected": false,
            "result": "clean site"
        },
        "Wepawet": {
            "detected": false,
            "result": "clean site"
        },
        "AlienVault": {
            "detected": false,
            "result": "clean site"
        },
        "Emsisoft": {
            "detected": false,
            "result": "clean site"
        },
        "Malc0de Database": {
            "detected": false,
            "result": "clean site",
            "detail": "http://malc0de.com/database/index.php?search=google.ru"
        },
        "SpyEyeTracker": {
            "detected": false,
            "result": "clean site",
            "detail": "https://spyeyetracker.abuse.ch/monitor.php?host=google.ru"
        },
        "malwares.com URL checker": {
            "detected": false,
            "result": "clean site"
        },
        "Phishtank": {
            "detected": false,
            "result": "clean site"
        },
        "Malwared": {
            "detected": false,
            "result": "clean site"
        },
        "Avira": {
            "detected": false,
            "result": "clean site"
        },
        "OpenPhish": {
            "detected": false,
            "result": "clean site"
        },
        "Antiy-AVL": {
            "detected": false,
            "result": "clean site"
        },
        "SCUMWARE.org": {
            "detected": false,
            "result": "clean site"
        },
        "FraudSense": {
            "detected": false,
            "result": "clean site"
        },
        "Opera": {
            "detected": false,
            "result": "clean site"
        },
        "Comodo Site Inspector": {
            "detected": false,
            "result": "clean site"
        },
        "Malekal": {
            "detected": false,
            "result": "clean site"
        },
        "ESET": {
            "detected": false,
            "result": "clean site"
        },
        "Sophos": {
            "detected": false,
            "result": "unrated site"
        },
        "Yandex Safebrowsing": {
            "detected": false,
            "result": "clean site",
            "detail": "http://yandex.com/infected?l10n=en&url=http://google.ru/"
        },
        "SecureBrain": {
            "detected": false,
            "result": "clean site"
        },
        "Malware Domain Blocklist": {
            "detected": false,
            "result": "clean site"
        },
        "Blueliv": {
            "detected": false,
            "result": "clean site"
        },
        "Netcraft": {
            "detected": false,
            "result": "unrated site"
        },
        "PalevoTracker": {
            "detected": false,
            "result": "clean site"
        },
        "AutoShun": {
            "detected": false,
            "result": "unrated site"
        },
        "ThreatHive": {
            "detected": false,
            "result": "clean site"
        },
        "ParetoLogic": {
            "detected": false,
            "result": "clean site"
        },
        "Rising": {
            "detected": false,
            "result": "clean site"
        },
        "URLQuery": {
            "detected": false,
            "result": "unrated site"
        },
        "StopBadware": {
            "detected": false,
            "result": "unrated site"
        },
        "Sucuri SiteCheck": {
            "detected": false,
            "result": "clean site"
        },
        "Fortinet": {
            "detected": false,
            "result": "clean site"
        },
        "Baidu-International": {
            "detected": false,
            "result": "clean site"
        }
    }
}'

  #
  # test 'unscanned domain allowed' do
  #   data = { 'response_code' => 0, resource: 'http://www.google.com',
  #            url: 'http://www.google.com/' }
  #   assert CheckDomainBanJob.new.resource_allowed?(data), 'unscanned domain should be allowed'
  # end
  #
  # test 'domain in goglobase in not allowed' do
  #   hash = JSON.parse result_fix
  #   assert_not CheckDomainBanJob.new.resource_allowed?(hash), 'domain in goglebasee should not be allowed'
  # end
  #
  # test 'domain in shitbase is allowed' do
  #   hash = JSON.parse result_fix1
  #   assert CheckDomainBanJob.new.resource_allowed?(hash), 'resource with zero positives are should be allowed'
  # end

  #
  # test 'domain with few positives  allowed' do
  #   data = { response_code: 1, resource: 'http://www.google.com',
  #            url: 'http://www.google.com/', positives: 2, total: 12}
  #   assert CheckDomainBanJob.resource_allowed?(data), 'resource with few positives should be allowed'
  # end



end
