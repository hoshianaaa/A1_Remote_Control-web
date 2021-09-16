ps aux | grep ayame-web | grep -v grep | awk '{ print "kill -9", $2 }' | sh
sleep 1
yarn serve &
