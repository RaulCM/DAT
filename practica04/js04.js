#!/usr/bin/nodejs

/*Raul Cano Montero
login: rcano*/

function tokmh(speed) {
	return (speed * 3600 / 1000);
}

function tomph(speed) {
	return (speed * 3600 / 1609.344);
}

function convert(speed, units) {
	if (arguments.length != 2) {
		throw new Error("\tNumero de argumentos incorrecto.");
	}
	switch (units) {
		case 'm/s':
			return (speed);
		case 'km/h':
			return (tokmh(speed));
		case 'mph':
			return (tomph(speed));
		default:
			throw new SyntaxError("\tUnidad introducida errónea.\n\t\tValores permitidos: 'm/s', 'km/h' y 'mph'");
	}
}

var speed = 20;

try {
	console.log(convert(speed, 'm/s'));
} catch (e) {
	console.log(e.name + ": " + e.message)
}

try {
	console.log(convert(speed, 'km/h'));
} catch (e) {
	console.log(e.name + ": " + e.message)
}

try {
	console.log(convert(speed, 'mph'));
} catch (e) {
	console.log(e.name + ": " + e.message)
}

try {
	console.log(convert(speed, 'inch/min'));
} catch (e) {
	console.log(e.name + ": " + e.message)
}

try {
	console.log(convert(speed));
} catch (e) {
	console.log(e.name + ": " + e.message)
}
