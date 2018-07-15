/*Raul Cano Montero
login: rcano*/
'use strict'

function prediccion(latitud, longitud) {
	let request = require('request');
	let dir_base = "http://api.weatherunlocked.com/"
	let recurso = "api/current/"
	let localizacion = String(latitud) + "," + String(longitud)
	let uri = dir_base + recurso + localizacion
	let app_id = "0a18dafe"
	let app_key = "654a9ca5910b42a2a6ad4cb382e97e03"
	let param1 = "app_id=" + app_id + "&" + "app_key=" + app_key
	let param2 = "lang=es"
	uri = uri + "?" + param2 + "&" + param1
	request.get(uri, function(error, response, body) {
		imprime(body);
	});
}

function imprime(x) {
	let y = JSON.parse(x);
	let mensaje = "Información meteorológica para la localizacion con coordenadas " + y.lat + "," + y.lon + ":\n"
	mensaje += "\tTemperatura: " + y.temp_c + "ºC\n"
	mensaje += "\tEstado: " + y.wx_desc + "\n"
	mensaje += "\tSensación térmica: " + y.feelslike_c + "ºC\n"
	mensaje += "\tHumedad: " + y.humid_pct + "%\n"
	mensaje += "\tPunto de rocío: " + y.dewpoint_c + "ºC\n"
	mensaje += "\tVelocidad del viento: " + y.windspd_kmh + " km/h\n"
	mensaje += "\tPresión atmosférica: " + y.slp_mb + " mbar\n"
	console.log(mensaje);
}

function test() {
	prediccion(40.48, -3.68)
	prediccion(48.85, 2.34)
	prediccion(60.16, 24.94)
	prediccion(25.19, 55.26)
}

test()
