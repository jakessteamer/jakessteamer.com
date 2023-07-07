require('dotenv').config();
/**
 * Decodes a Base64 string to a JSON object.
 * @param {string} base64String - The Base64 string to decode.
 * @returns {Object} The decoded Base64 string as a JSON object.
 */
function decodeBase64ToJson(base64String) {
	const decodedString = Buffer.from(base64String, 'base64').toString();
	return JSON.parse(decodedString);
}
const credentials = decodeBase64ToJson(process.env.SERVICE_ACCOUNT);

console.log(credentials);
