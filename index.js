#!/usr/bin/env node

// IMPORT EXTERNAL LIBRARIES
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

// IMPORT CONFIG FILES
const ioConfig = require('./config/io-config');

// IMPORT UTILITY FILES
const generatePassword = require('./utils/generate-password');
const savePassword = require('./utils/save-password');

// CLI CONFIGURATION
program.version('1.0.0');
program.description('Ultimate Password Generator!');

program.option('-l, --length <number>', 'length of password', 16);
program.option('-sf, --save-to-file', `saves password into "${ioConfig.PASSWORD_FILE_NAME}" file`);
program.option('-sc, --save-to-clipboard', 'copies password into clipboard');
program.option('-nl, --no-letters', 'password would not contain any letter');
program.option('-nd, --no-digits', 'password would not contain any digit');
program.option('-ns, --no-symbols', 'password would not contain any symbol');

program.parse();

// MAIN
const {length, saveToFile, saveToClipboard, letters, digits, symbols} = program.opts();

try {
	const password = generatePassword(length, letters, digits, symbols);
	
	console.log(chalk.blue('generated password: ') + chalk.bold(password));
	
	if (saveToClipboard) {
		clipboardy.writeSync(password);
		console.log(chalk.yellow('password has been successfully copied into clipboard.'));
	}
	
	if (saveToFile) {
		savePassword(password);
		console.log(chalk.yellow(`The password has been successfully save into "${ioConfig.PASSWORD_FILE_NAME}" file.`));
	}
} catch (e) {
	console.log(chalk.red(e.message));
}
