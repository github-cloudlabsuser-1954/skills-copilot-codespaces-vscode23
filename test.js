class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.operation = '';
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.a / this.b;
    }

    getUserInput() {
        this.a = Number(prompt("Enter the first number:"));
        this.b = Number(prompt("Enter the second number:"));
        this.operation = prompt("Enter the operation (add, subtract, multiply, divide):");
    }

    calculate() {
        switch(this.operation) {
            case 'add':
                return this.add();
            case 'subtract':
                return this.subtract();
            case 'multiply':
                return this.multiply();
            case 'divide':
                return this.divide();
            default:
                throw new Error('Invalid operation');
        }
    }
}

// Usage
const calculator = new Calculator();
calculator.getUserInput();
alert(`Result: ${calculator.calculate()}`);


const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from the file

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add method returns correct result', () => {
        calculator.a = 5;
        calculator.b = 3;
        expect(calculator.add()).toBe(8);
    });

    test('subtract method returns correct result', () => {
        calculator.a = 5;
        calculator.b = 3;
        expect(calculator.subtract()).toBe(2);
    });

    test('multiply method returns correct result', () => {
        calculator.a = 5;
        calculator.b = 3;
        expect(calculator.multiply()).toBe(15);
    });

    test('divide method returns correct result when divisor is not zero', () => {
        calculator.a = 10;
        calculator.b = 2;
        expect(calculator.divide()).toBe(5);
    });

    test('divide method throws error when divisor is zero', () => {
        calculator.a = 10;
        calculator.b = 0;
        expect(() => calculator.divide()).toThrow("Cannot divide by zero");
    });
});