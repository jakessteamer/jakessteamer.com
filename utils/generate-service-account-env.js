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
 * Reads a file and returns its content.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string>} The content of the file.
 */
async function readFile(filePath) {
  return fs.readFile(filePath, 'utf8');
}

/**
 * Encodes a string to a Base64 string.
 * @param {string} string - The string to encode.
 * @returns {string} The encoded Base64 string.
 */
function encodeToBase64(string) {
  return Buffer.from(string).toString('base64');
}

/**
 * Appends a new environment variable to a .env file.
 * @param {string} base64ServiceAccount - The Base64 string of the service account.
 * @returns {Promise<void>}
 */
async function writeToEnvFile(base64ServiceAccount) {
  await fs.appendFile('.env', `SERVICE_ACCOUNT=${base64ServiceAccount}\n`, 'utf8');
}

/**
 * Main function. Reads the service account key from a file, encodes it,
 * and writes the result to a .env file.
 */
async function main() {
  const filePath = path.resolve(__dirname, '../serviceAccount.json');
  const serviceAccountKey = await readFile(filePath);
  const base64ServiceAccountKey = encodeToBase64(serviceAccountKey);
  await writeToEnvFile(base64ServiceAccountKey);
  console.log('Service account key has been Base64 encoded and stored in .env file.');
}

main().catch((error) => console.error(`Error in main: ${error}`));
