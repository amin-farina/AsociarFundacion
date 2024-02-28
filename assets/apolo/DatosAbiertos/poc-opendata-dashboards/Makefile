DEF_SCALE=5
DEF_TIME=30
DEF_CLIENT=10

ifndef SCALE
	SCALE:=$(DEF_SCALE)
endif

ifndef TIME
	TIME:=$(DEF_TIME)
endif

ifndef CLIENT
	CLIENT:=$(DEF_CLIENT)
endif


.PHONY: init run setup

setup:
	test/setup

update:
	docker-compose up -d 
	# It just re-applies changes in the docker-compose

stop-%:
	docker-compose stop $*

restart-%:
	docker-compose stop $* && docker-compose start $* && docker-compose logs $*

init: 
	export SCALE=$(SCALE) &&\
	test/init

run:
	export SCALE=$(SCALE) &&\
	export CLIENT=$(CLIENT) && \
	export TIME=$(TIME) && test/run

clean:
	docker-compose stop && rm -rf .data/
