DOCKER_BUILD_CMD=docker build --no-cache
APP_NAME=web-analyser-client
VERSION=0.1.0
IMAGE_NAME=$(APP_NAME):$(VERSION)

build:
	npm run build

build-image: build
	$(DOCKER_BUILD_CMD) . -t $(IMAGE_NAME)

run:
	npm start

test:
	npm run test

clean:
	rm -rf .angular dist
