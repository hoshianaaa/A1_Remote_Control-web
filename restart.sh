ps aux | grep ayame-web-client | grep -v grep | awk '{ print "kill -9", $2 }' | sh
sleep 1
yarn serve &
