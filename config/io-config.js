const path = require('path');

const PASSWORD_FILE_NAME = 'passwords.txt';
const PASSWORD_FILE_LOCATION = path.join(__dirname, '../', PASSWORD_FILE_NAME);

module.exports = {
	PASSWORD_FILE_NAME,
	PASSWORD_FILE_LOCATION,
};
