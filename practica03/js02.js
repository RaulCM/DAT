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
		return ("Error: numero de argumentos incorrecto.");
	}
	switch (units) {
		case 'm/s':
			return (speed);
		case 'km/h':
			return (tokmh(speed));
		case 'mph':
			return (tomph(speed));
		default:
			return ("Error: unidad introducida errónea.");
	}
}

var speed = 20;
console.log(convert(speed, 'm/s'));
console.log(convert(speed, 'km/h'));
console.log(convert(speed, 'mph'));
console.log(convert(speed, 'inch/min'));
console.log(convert(speed));
