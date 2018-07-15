/*Raul Cano Montero
login: rcano*/
'use strict'

let options = {
	enableHighAccuracy: true,
	maximumAge: 0,
}

function firstVisit() {
	let nombreUsuario = localStorage.getItem('nombreUsuario');
	if (!nombreUsuario) {
		let input = prompt("¿Cómo te llamas?");
		localStorage.setItem('nombreUsuario', input);
		getPosition()
	}
}

function success(pos) {
	let x = pos.coords;
	localStorage.setItem('latitud', x.latitude.toFixed(3));
	localStorage.setItem('longitud', x.longitude.toFixed(3));
	localStorage.setItem('precision', x.accuracy);
	if (!localStorage.getItem("registrado")) {
		let usuario = localStorage.getItem('nombreUsuario')
		let latitud = localStorage.getItem("latitud")
		let longitud = localStorage.getItem("longitud")
		let precision = localStorage.getItem("precision")
		let mensaje = "Hola " + localStorage.getItem('nombreUsuario') + ". Esta es tu primera visita. "
		mensaje += "Tus coordenadas son: " + localStorage.getItem("latitud") + ", "
		mensaje += localStorage.getItem("longitud") + " (más menos " + localStorage.getItem("precision") + " metros)"
		$('#mensaje').text(mensaje)
		localStorage.setItem('registrado', true)
	}
}

function error(err) {
	console.warn('ERROR(${err.code}): ${err.message}');
};

function getPosition() {
	navigator.geolocation.getCurrentPosition(success, error, options);
	localStorage.setItem('fecha', new Date())
}
