from aws_cdk import (
    aws_iam as iam,
    aws_sqs as sqs,
    aws_sns as sns,
    aws_s3 as s3,
    aws_s3_notifications as s3n,
    aws_sns_subscriptions as subs,
    core
)


class ApisStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        queue = sqs.Queue(
            self, "ApisQueue",
            visibility_timeout=core.Duration.seconds(300),
        )

        topic = sns.Topic(
            self, "ApisTopic"
        )

        topic.add_subscription(subs.SqsSubscription(queue))

        bucket = s3.Bucket(self, "apis")
        bucket.add_event_notification(s3.EventType.OBJECT_CREATED, s3n.SnsDestination(topic))
