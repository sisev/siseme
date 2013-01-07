
test:
	node test/server.js &
	./node_modules/.bin/mocha-phantomjs -R spec "http://localhost:8080/test/runner.html"
	kill -9 `cat test/pid.txt`
	rm test/pid.txt

.PHONY: test
