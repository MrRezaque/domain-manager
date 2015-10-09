#
DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $DIR

source /etc/profile.d/rvm.sh 
echo 'deamon started' >> deamon_start_log
bundle exec crono -e development 1>> daemon_start_log 2>> daemon_start_log &

echo $(date) >> daemon_start_log