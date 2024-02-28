#!/usr/bin/env python3

from aws_cdk import core

from apis.apis_stack import ApisStack


app = core.App()
ApisStack(app, "apis", env={'region': 'us-west-2'})

app.synth()
