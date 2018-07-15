/*Raul Cano Montero
login: rcano*/
'use strict'

function checkLength(password, length) {
	return (password.length >= length);
}

function checkMinus(password, nMinus) {
	let n = 0;
	for (var i = 0; i < password.length; i++) {
		let letter = password[i].toLowerCase();
		if (letter === password[i]) {
			n++;
		}
	}
	return (n >= nMinus);
}

function checkCaps(password, nCaps) {
	let n = 0;
	for (var i = 0; i < password.length; i++) {
		let letter = password[i].toUpperCase();
		if (letter === password[i]) {
			n++;
		}
	}
	return (n >= nCaps);
}

function checkNumbers(password, nNumbers) {
	let n = 0;
	for (var i = 0; i < password.length; i++) {
		if (!isNaN(password[i])) {
			n++;
		}
	}
	return (n >= nNumbers);
}

function checkSpecial(password, nSpecial, specials) {
	let n = 0;
	for (var i = 0; i < password.length; i++) {
		for (var j = 0; j < specials.length; j++) {
			if (password[i] === specials[j]) {
				n++;
			}
		}
	}
	return (n >= nSpecial);
}

function validate(password, length, nMinus, nCaps, nNumbers, nSpecial, specials) {
	return (checkLength(password, length) &&
		checkMinus(password, nMinus) &&
		checkCaps(password, nCaps) &&
		checkNumbers(password, nNumbers) &&
		checkSpecial(password, nSpecial, specials));
}

var password = 'QWer12$.';
var length = 3;
var nMinus = 1;
var nCaps = 1;
var nNumbers = 2;
var nSpecial = 2;
var specials = ',.-{}[]!"·$%&/()=?¿¡\'';

console.log(validate(password, length, nMinus, nCaps, nNumbers, nSpecial, specials));
