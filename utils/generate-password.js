const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SYMBOLS = '!@#$%^&*_-+=';

const generatePassword = (length, useLetters, useDigits, useSymbols) => {
	const characters = [];
	if (useLetters) characters.push(...LETTERS);
	if (useDigits) characters.push(...DIGITS);
	if (useSymbols) characters.push(...SYMBOLS);
	
	if (isNaN(length) || length <= 0) throw new Error('I can\'t generate a password with this length :(');
	if (characters.length === 0) throw new Error('I can\'t generate a password if you won\'t let me use any character :(');
	
	let password = '';
	for (let i = 0; i < length; i++)
		password += characters[Math.floor(Math.random() * characters.length)];
	
	return password;
};

module.exports = generatePassword;
