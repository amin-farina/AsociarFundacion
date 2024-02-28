SHELL=/bin/bash

profile=apolo-deployer
cdk_helper=cdk --profile $(profile)

bootstrap:
	$(cdk_helper) bootstrap

deploy:
	$(cdk_helper) deploy awschatbot

diff:
	$(cdk_helper) diff
