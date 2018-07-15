/*Raul Cano Montero
login: rcano*/
'use strict'

class Calculadora {

	constructor(op1, operator, op2, state) {
		this.op1 = null;
		this.operator = null;
		this.op2 = null;
		this.state = 0;
	}

	sumar() {
		return (Number(this.op1) + Number(this.op2));
	}

	restar() {
		return (Number(this.op1) - Number(this.op2));
	}

	multiplicar() {
		return (Number(this.op1) * Number(this.op2));
	}

	dividir() {
		return (Number(this.op1) / Number(this.op2));
	}

	result() {
		if (this.op1 != null && this.op2 != null && this.operator != null) {
			switch (this.operator) {
				case '+':
					return (this.sumar());
				case '-':
					return (this.restar());
				case '*':
					return (this.multiplicar());
				case '/':
					return (this.dividir());
			}
		} else {
			return "ERROR";
		}
	}

	reset(key) {
		this.state = 0;
		this.op1 = null;
		this.op2 = null;
		this.operator = null;
		return this.inicio(key);
	}

	inicio(key) {
		if (!(isNaN(key))) {
			this.op1 = null;
			this.op2 = null;
			this.operator = null;
			this.state = 1;
			return this.numero1(key);
		} else if (key == 'c') {
			this.op1 = null;
			this.op2 = null;
			this.operator = null;
			return 0;
		}
		if (this.op1 != null && this.op2 != null && this.operator != null) {
			return this.result();
		} else {
			return 0;
		}
	}

	numero1(key) {
		if (!(isNaN(key))) {
			if (this.op1 == null) {
				this.op1 = key.toString();
			} else {
				this.op1 += key.toString();
			}
		} else if (key == '+' || key == '-' || key == '*' || key == '/') {
			this.operator = key;
			this.state = 2;
		} else if (key == 'c') {
			return this.reset(key);
		}
		return this.op1;
	}

	operador(key) {
		if (key == '+' || key == '-' || key == '*' || key == '/') {
			this.operator = key;
		} else if (!(isNaN(key))) {
			this.state = 3;
			return this.op2 = key;
		} else if (key == 'c') {
			return this.reset(key);
		}
		return this.op1;
	}

	numero2(key) {
		if (!(isNaN(key))) {
			if (this.op2 == null) {
				this.op2 = key.toString();
			} else {
				this.op2 += key.toString();
			}
		} else if (key == '=') {
			this.state = 0;
			return this.result();
		} else if (key == 'c') {
			return this.reset(key);
		} else if (key == '+' || key == '-' || key == '*' || key == '/') {
			if (this.op2 != null) {
				this.op1 = this.result();
				this.operator = key;
				this.op2 = null;
				return this.op1;
			} else {
				this.operator = key;
				return this.op1;
			}
		}
		return this.op2;
	}

	getKey(key) {
		switch (this.state) {
			case 0:
				return this.inicio(key);
				break;
			case 1:
				return this.numero1(key);
				break;
			case 2:
				return this.operador(key);
				break;
			case 3:
				return this.numero2(key);
				break;
			default:
				return ("ERROR");
		}
	}
}

let calc = new Calculadora();

console.log(calc.getKey(2))
console.log(calc.getKey("+"))
console.log(calc.getKey(1))
console.log(calc.getKey(1))
console.log(calc.getKey("+"))
console.log(calc.getKey("*"))
console.log(calc.getKey(3))
console.log(calc.getKey("="))
console.log(calc.getKey(1))
console.log(calc.getKey("c"))
console.log(calc.getKey(5))
console.log(calc.getKey("/"))
console.log(calc.getKey(2))
console.log(calc.getKey("="))
