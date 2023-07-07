const { URLSearchParams } = require('url');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

class CustomError extends Error {
	constructor(message, errorObject) {
		super(message); // Pass the message to the Error constructor
		this.name = this.constructor.name;
		this.errorObject = errorObject;
	}
}

/**
 * Decodes a Base64 string to a JSON object.
 * @param {string} base64String - The Base64 string to decode.
 * @returns {Object} The decoded Base64 string as a JSON object.
 */
function decodeBase64ToJson(base64String) {
	const decodedString = Buffer.from(base64String, 'base64').toString();
	return JSON.parse(decodedString);
}

const getGoogleAuth = async () => {
	try {
		const credentials = decodeBase64ToJson(process.env.SERVICE_ACCOUNT);

		const authClient = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});
		return authClient;
	} catch (error) {
		console.error('Error authenticating Google account:', error);
		throw new Error('Failed to authenticate Google account');
	}
};

const createSpreadsheetRow = (name, email, phoneNumber, auth) => ({
	spreadsheetId: process.env.SPREADSHEET_ID,
	range: process.env.SHEET_NAME,
	valueInputOption: 'USER_ENTERED',
	insertDataOption: 'INSERT_ROWS',
	resource: {
		values: [[name, email, phoneNumber]],
	},
	auth,
});

const saveContactFormDataToGoogleSheet = async (name, email, phoneNumber) => {
	try {
		const auth = await getGoogleAuth();
		// Create Google Sheets API client
		const service = google.sheets({ version: 'v4', auth });
		const row = createSpreadsheetRow(name, email, phoneNumber, auth);
		const response = (await service.spreadsheets.values.append(row)).data;
		return response;
	} catch (error) {
		console.error('An error occurred while saving contact form data:', error);
		throw new CustomError('Failed to save contact form data.', error);
	}
};

const createTransporter = () =>
	nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MY_GMAIL,
			pass: process.env.APP_PASSWORD,
		},
	});

const sendEmail = async (name, email, phoneNumber, message) => {
	try {
		const transporter = createTransporter();
		const msg = {
			to: process.env.MY_GMAIL,
			from: `"${name}" <${email}>`,
			subject: `Website Contact Form Submission from ${name}`,
			html: `
      <div style="font-family: 'Roboto', sans-serif; padding: 20px;">
        <h1 style="color: #333; color:#333;background-color: #c2e7ff;border-radius: 8px;padding: 8px;">You received a message from:</h1>
        <p style="margin-top: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-top: 10px;"><strong>Name:</strong> ${phoneNumber}</p>
        <p style="margin-top: 10px;"><strong>Email:</strong> ${email}</p>
        <p style="margin-top: 20px;"><strong>Message:</strong></p>
        <p style="margin-top: 10px;">${message}</p>
      </div>
    `,
		};

		const info = await transporter.sendMail(msg);

		if (!info.messageId) {
			throw new CustomError('Message not sent', info);
		}
		return info;
	} catch (error) {
		console.error('An error occurred while sending the email:', error);
		throw new CustomError('Failed to send the email', error);
	}
};

exports.handler = async function (event, context) {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const params = new URLSearchParams(event.body);
		const name = params.get('name');
		const phoneNumber = params.get('phone');
		const email = params.get('email');
		const message = params.get('message');

		const googleSheetsResponse = await saveContactFormDataToGoogleSheet(
			name,
			email,
			phoneNumber
		);

		// Send an email notification to your email address
		const emailResponse = await sendEmail(name, phoneNumber, email, message);

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Success',
				googleSheetsResponse,
				emailResponse,
			}),
		};
	} catch (error) {
		// If there's an error, log it and return a formatted error object
		console.error('Error:', error);

		// Create an error object with all relevant details
		const errorObject = {
			message: error.message,
			errorDetails: error.errorObject, // Here we access the additional error details
		};

		// Return a pretty printed JSON string
		return {
			statusCode: 500,
			body: JSON.stringify(errorObject, null, 2), // The "2" parameter is for formatting the JSON with 2 spaces per indentation level
		};
	}
};
