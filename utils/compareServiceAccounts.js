const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

/**
 * Reads a JSON file and returns its content as an object.
 * @param {string} filePath - The path to the file.
 * @returns {Object} The content of the file as a JSON object.
 */
async function readFileAsJson(filePath) {
	const fileContent = await fs.readFile(filePath, 'utf8');
	return JSON.parse(fileContent);
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

/**
 * Compares two objects for equality.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {boolean} True if the objects are equal, false otherwise.
 */
function areObjectsEqual(obj1, obj2) {
	const str1 = JSON.stringify(obj1);
	const str2 = JSON.stringify(obj2);
	return str1 === str2;
}

/**
 * Main function. Reads the service account key from the environment, decodes it,
 * reads the original service account key from a file, and compares the two.
 */
async function main() {
	// Assume base64ServiceAccountKey is the base64 encoded string
	const base64ServiceAccountKey = process.env.SERVICE_ACCOUNT;

	const decodedServiceAccount = decodeBase64ToJson(base64ServiceAccountKey);
	console.log(`decodedServiceAccount: ${decodedServiceAccount}`);
	// Use path.resolve to get the absolute path to the file
	const filePath = path.resolve(__dirname, '../serviceAccount.json');
	const originalServiceAccount = await readFileAsJson(filePath);
	console.log(`originalServiceAccount: ${originalServiceAccount}`);

	if (areObjectsEqual(originalServiceAccount, decodedServiceAccount)) {
		console.log('The two objects are equal.');
	} else {
		console.log('The two objects are not equal.');
	}
}

main().catch((error) => console.error(`Error in main: ${error}`));
