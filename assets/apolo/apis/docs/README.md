https://medium.com/faun/aws-lambda-serverless-framework-python-a-step-by-step-tutorial-part-4-creating-a-contact-2283445a99c9


```bash
mkdir contact-form
cd contact-form
virtualenv -p python3 venv
. venv/bin/activate
mkdir app
cd app
```

```
serverless create --template aws-python3 --name contact-form

```

```yaml
service: contact-form
provider:
  name: aws
  runtime: python3.6
  stage: dev
  region: 'eu-west-1'
  iamRoleStatements:
    - Effect: Allow
      Action:
        - ses:SendEmail
        - ses:SendRawEmail
      Resource: "*"        
  environment:
    REGION_NAME: 'eu-west-1'  
    ACCESS_KEY: 'xxxxxxxxxx'  
    SECRET_KEY: 'xxxxxxxxxxxx/xxxxxxxxx+xxxxxxxxxxx+xxxxxx'
functions:
  sendEmail:
    handler: handler.sendEmail
    description: This function will send an email
    events:
      - http:
          path: send-email
          method: post
          integration: lambda
          cors: true
          response:
            headers:
              "Access-Control-Allow_Origin": "'*'"
```

handler.py

```python
import json
import boto3
import os

region_name = os.environ['REGION_NAME']
aws_access_key_id = os.environ['SECRET_KEY']
aws_secret_access_key = os.environ['SECRET_KEY']
def sendEmail(event, context):
    data = event['body']
    name = data ['name']    
    source = data['source']    
    subject = data['subject']
    message = data['message']    
    destination = data['destination']
    _message = "Message from: " + name + "\nEmail: " + source + "\nMessage content: " + message    
    
    client = boto3.client('ses' )    
        
    response = client.send_email(
        Destination={
            'ToAddresses': [destination]
            },
        Message={
            'Body': {
                'Text': {
                    'Charset': 'UTF-8',
                    'Data': _message,
                },
            },
            'Subject': {
                'Charset': 'UTF-8',
                'Data': subject,
            },
        },
        Source=source,
)
    return _message + str(region_name)
```


```
serverless deploy
```