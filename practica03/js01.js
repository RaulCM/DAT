/*Raul Cano Montero
login: rcano*/
function tokmh(speed) {
	return (speed * 3600 / 1000);
}

function tomph(speed) {
	return (speed * 3600 / 1609.344);
}

var speed = 20;
console.log('Velocidad en m/s:', speed);
console.log('Velocidad en km/h:', tokmh(speed));
console.log('Velocidad en mph:', tomph(speed));
