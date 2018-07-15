/*Raul Cano Montero
login: rcano*/
'use strict'

function sumar(calc) {
	return (Number(calc.op1) + Number(calc.op2));
}

function restar(calc) {
	return (Number(calc.op1) - Number(calc.op2));
}

function multiplicar(calc) {
	return (Number(calc.op1) * Number(calc.op2));
}

function dividir(calc) {
	return (Number(calc.op1) / Number(calc.op2));
}

function result(calc) {
	if (calc.op1 != null && calc.op2 != null && calc.operator != null) {
		switch (calc.operator) {
			case '+':
				return (sumar(calc));
			case '-':
				return (restar(calc));
			case '*':
				return (multiplicar(calc));
			case '/':
				return (dividir(calc));
		}
	} else {
		return "ERROR";
	}
}

function reset(key, calc) {
	calc.state = 0;
	calc.op1 = null;
	calc.op2 = null;
	calc.operator = null;
	return inicio(key, calc);
}

function inicio(key, calc) {
	if (!(isNaN(key))) {
		calc.op1 = null;
		calc.op2 = null;
		calc.operator = null;
		calc.state = 1;
		return numero1(key, calc);
	} else if (key == 'c') {
		calc.op1 = null;
		calc.op2 = null;
		calc.operator = null;
		return 0;
	}
	if (calc.op1 != null && calc.op2 != null && calc.operator != null) {
		return result(calc);
	} else {
		return 0;
	}
}

function numero1(key, calc) {
	if (!(isNaN(key))) {
		if (calc.op1 == null) {
			calc.op1 = key.toString();
		} else {
			calc.op1 += key.toString();
		}
	} else if (key == '+' || key == '-' || key == '*' || key == '/') {
		calc.operator = key;
		calc.state = 2;
	} else if (key == 'c') {
		return reset(key, calc);
	}
	return calc.op1;
}

function operador(key, calc) {
	if (key == '+' || key == '-' || key == '*' || key == '/') {
		calc.operator = key;
	} else if (!(isNaN(key))) {
		calc.state = 3;
		return calc.op2 = key;
	} else if (key == 'c') {
		return reset(key, calc);
	}
	return calc.op1;
}

function numero2(key, calc) {
	if (!(isNaN(key))) {
		if (calc.op2 == null) {
			calc.op2 = key.toString();
		} else {
			calc.op2 += key.toString();
		}
	} else if (key == '=') {
		calc.state = 0;
		return result(calc);
	} else if (key == 'c') {
		return reset(key, calc);
	} else if (key == '+' || key == '-' || key == '*' || key == '/') {
		if (calc.op2 != null) {
			calc.op1 = result(calc);
			calc.operator = key;
			calc.op2 = null;
			return calc.op1;
		} else {
			calc.operator = key;
			return calc.op1;
		}
	}
	return calc.op2;
}

function getKey(key, calc) {
	switch (calc.state) {
		case 0:
			return inicio(key, calc);
			break;
		case 1:
			return numero1(key, calc);
			break;
		case 2:
			return operador(key, calc);
			break;
		case 3:
			return numero2(key, calc);
			break;
		default:
			return ("ERROR");
	}
}

function testCalc() {

	let calc = {
		op1: null,
		op2: null,
		operator: null,
		state: 0,
	};
	console.log(getKey(2, calc))
	console.log(getKey("+", calc))
	console.log(getKey(1, calc))
	console.log(getKey(1, calc))
	console.log(getKey("+", calc))
	console.log(getKey("*", calc))
	console.log(getKey(3, calc))
	console.log(getKey("=", calc))
	console.log(getKey(1, calc))
	console.log(getKey("c", calc))
	console.log(getKey(5, calc))
	console.log(getKey("/", calc))
	console.log(getKey(2, calc))
	console.log(getKey("=", calc))
}


testCalc();
