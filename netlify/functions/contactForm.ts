import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
// Use for local testing
//import 'dotenv/config';

const handler: Handler = async (event, context) => {
  // your server-side functionality
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: 'Method not allowed',
    };
  }

  // Passed all checks...
  try {
    // Form elements
    const { name, email, message } = JSON.parse(event.body);

    // See https://nodemailer.com/ for more
    const transporter = nodemailer.createTransport({
      // Follow the instructions from your mail provider.
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    /* 
    setting service: 'gmail' is same as providing the settings manually in the transport object above.

{
  host: "smtp.gmail.com",
  port: 465,
  secure: true
}

https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
*/

    const msg = {
      // These settings will work with Ethereal Email
      // Where messages should get delivered
      to: 'softwarengdev@gmail.com',
      // Who they are coming from (the submitter)
      from: `"${name}" <${email}>`,

      // Depending on the service (e.g. Zoho), you my need may need send
      // to/from yourself. Remember to set replyTo so you know who it came from
      // to: `"${process.env.MAIL_NAME}" <${process.env.MAIL_EMAIL}>`,
      // from: `"${process.env.MAIL_NAME}" <${process.env.MAIL_EMAIL}>`,

      // Set submitter as reply-to
      // replyTo: `"${yourname}" <${email_address}>`,
      // Could also CC the submitter so they have a copy too
      // cc: `"${yourname}" <${email_address}>`,

      // Set a meaningful subject
      subject: `Website Contact Form Submission from ${name}`,

      // Add the message and short_url
      text: `You got a message from 
    Email : ${email}
    Name: ${name}
    
    Message: ${message}`,
      // Want HTML?
      //html: `<p>Short URL: ${short_url}</p><p>${message}</p>`,
    };

    // Send
    let info = await transporter.sendMail(msg);

    // Check response
    if (info.messageId) {
      // All good
      return {
        statusCode: 200,
        body: JSON.stringify({
          msg: 'Your message was sent. Thank you.',
        }),
      };
    }
  } catch (err) {
    // Log error
    console.log(err);
    // Return message
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Could not send your message. Please try again.',
      }),
    };
  }
};

export { handler };
