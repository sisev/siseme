BIN=./node_modules/.bin
VERSION=$(shell echo "console.log(require('./src/manifest.json').version)"|node)
NAME=$(shell echo "console.log(require('./src/manifest.json').name)"|node)
LOWER_NAME=$(shell echo "console.log(require('./src/manifest.json').name.toLowerCase())"|node)
CHECK=\033[32m✔\033[39m

build:
	@echo ""
	@echo "Building ${NAME} v${VERSION}"
	@echo ""
	@node ./tools/build.js
	@echo "Runing pre-build script...                     ${CHECK} Done"
	@node ${BIN}/crx pack src -f dists/${LOWER_NAME}-v${VERSION}.crx -p key.pem
	@echo "Building crx for distribution...               ${CHECK} Done"
	@mkdir build
	@cd src && zip -q -r ../build/upload.zip *
	@echo "Building zip for upload...                     ${CHECK} Done"
	@echo ""
	@echo "${NAME} successfully built:"
	@echo "  dists/${LOWER_NAME}-v${VERSION}.crx"
	@echo "  build/upload.zip"
	@echo ""

test:
	node tests/server.js &
	${BIN}/mocha-phantomjs -R spec "http://localhost:8080/tests/runner.html"
	kill -9 `cat tests/pid.txt`
	rm tests/pid.txt

clean:
	rm -r build

.PHONY: test
