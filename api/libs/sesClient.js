// const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const { AWS_CONFIG } = require('../constant');
var AWS = require('aws-sdk');
// Set the AWS Region.
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_EMAIL_SENDER } = AWS_CONFIG;

const config = new AWS.Config({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
})

// // Create SES service object.
const sesClient = new AWS.SES(config);


const sendEmail = async (recipient) => {
    let params = {
        Destination: {
            BccAddresses: [
            ],
            CcAddresses: [
            ],
            ToAddresses: [
                recipient
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is the message body in text format."
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Test email"
            }
        },
        ReplyToAddresses: [
        ],
        ReturnPath: "",
        ReturnPathArn: "",
        Source: AWS_EMAIL_SENDER,
        SourceArn: ""
    };

    let result = {};

     sesClient.sendEmail(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            result = {
                status: 400,
                message: "Something went wrong while sending email",
                errorDetails: err,
            };
        }
        else
            result = {
                status: 200,
                message: 'Email Sent!',
                sms: data
            };

        return result;

    });
};

module.exports = sendEmail;