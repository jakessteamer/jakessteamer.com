const fs = require('fs').promises;
const path = require('path');

/**
 * Reads a file and returns its content.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string>} The content of the file.
 */
async function readFile(filePath) {
  return await fs.readFile(filePath, 'utf8');
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
 * Writes environment variables to a .env file.
 * @param {object} envVariables - The environment variables to write.
 * @returns {Promise<void>}
 */
async function writeToEnvFile(envVariables) {
  const envString = Object.entries(envVariables)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  await fs.writeFile('.env', envString, 'utf8');
}

/**
 * Main function. Reads the service account key from a file, encodes it,
 * and writes the result to a .env file along with other environment variables.
 */
async function main() {
  const filePath = path.resolve(__dirname, '../serviceAccount.json');
  const serviceAccountKey = await readFile(filePath);
  const base64ServiceAccountKey = encodeToBase64(serviceAccountKey);

  const envVariables = {
    MY_VARIABLE_1: 'value1',
    MY_VARIABLE_2: 'value2',
    SERVICE_ACCOUNT: base64ServiceAccountKey,
  };

  await writeToEnvFile(envVariables);
  console.log(
    'Service account key has been Base64 encoded and environment variables have been stored in .env file.',
  );
}

main().catch((error) => console.error(`Error in main: ${error}`));
