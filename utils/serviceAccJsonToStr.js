const serviceAccountJson = require('../serviceAccount.json');

function parseAndReplaceNewlines(json) {
  const serviceAccountJson = json;

  if (serviceAccountJson.private_key) {
    serviceAccountJson.private_key = serviceAccountJson.private_key.replace(/\\n/g, '\n');
  }

  return serviceAccountJson;
}
console.log(serviceAccount);

console.log();
const parsedObject = parseAndReplaceNewlines(serviceAccount);
console.log(parsedObject);
