import json
import pytest

from aws_cdk import core
from apis.apis_stack import ApisStack


def get_template():
    app = core.App()
    ApisStack(app, "apis")
    return json.dumps(app.synth().get_stack("apis").template)


def test_sqs_queue_created():
    assert("AWS::SQS::Queue" in get_template())


def test_sns_topic_created():
    assert("AWS::SNS::Topic" in get_template())
