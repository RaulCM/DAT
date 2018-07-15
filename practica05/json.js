/*Raul Cano Montero
login: rcano*/
'use strict'

let trayectoria = {
	'Carreras': 294,
	'Victorias': 32,
	'Podios': 97,
	'Poles': 22,
	'VRapidas': 23,
	'Titulos': 2
}

let piloto = {
	'Nombre': 'Fernando',
	'Apellido': 'Alonso',
	'Edad': 36,
	'CampeonF1': true,
	'TitulosF1': ['2005', '2006'],
	'CampeonWEC': false,
	'TitulosWEC' : null,
	'Resultados': trayectoria
}

let cadena = JSON.stringify(piloto)
let objeto = JSON.parse(cadena)
console.log("Tipo:", typeof(cadena), "\n", cadena)
console.log("\nTipo:", typeof(objeto), "\n", objeto)
