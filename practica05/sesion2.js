/*Raul Cano Montero
login: rcano*/
'use strict'

let options = {
	enableHighAccuracy: true,
	maximumAge: 0,
}

function firstVisit() {
	if (!localStorage.getItem('datos')) {
		let input = prompt("¿Cómo te llamas?");
		let datos = {'nombreUsuario': input, 'registrado': false}
		localStorage.setItem('datos', JSON.stringify(datos));
		getPosition()
	}
}

function success(pos) {
	let x = pos.coords;
	let datos = JSON.parse(localStorage.getItem('datos'))
	datos.latitud = x.latitude.toFixed(3)
	datos.longitud = x.longitude.toFixed(3)
	datos.precision = x.accuracy
	datos.fecha = new Date()
	localStorage.setItem('datos', JSON.stringify(datos));
	if (!datos.registrado) {
		let mensaje = "Hola " + datos.nombreUsuario + ". Esta es tu primera visita. "
		mensaje += "Tus coordenadas son: " + datos.latitud + ", "
		mensaje += datos.longitud  + " (más menos " + datos.precision + " metros)"
		$('#mensaje').text(mensaje)
		datos.registrado = true
		localStorage.setItem('datos', JSON.stringify(datos));
	}
}

function error(err) {
	console.warn('ERROR(${err.code}): ${err.message}');
};

function getPosition() {
	navigator.geolocation.getCurrentPosition(success, error, options);
	localStorage.setItem('fecha', new Date())
}
