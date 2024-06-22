import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-1' });
const senderEmail = 'syedali.asar14@gmail.com';
const recipientEmail = 'syedali.asar14@gmail.com';

export const handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (!message) {
    return {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ error: 'Message is required.' }),
    };
  }

  const params = {
    Source: senderEmail,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Subject: {
        Data: `MindInsight Feedback Submitted`,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: `Message:\n\n${message}`,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ success: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email', error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};
