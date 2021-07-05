// IMPORT EXTERNAL LIBRARIES
const fs = require('fs');
const os = require('os');

// IMPORT CONFIG FILES
const ioConfig = require('../config/io-config');

// FUNCTIONS
const savePassword = (password) => {
	fs.open(ioConfig.PASSWORD_FILE_LOCATION, 'a', (e, id) => {
		fs.write(id, password + os.EOL, null, 'utf-8', () => {
			fs.close(id, () => {
			});
		});
	});
};

module.exports = savePassword;
