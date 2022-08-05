let valA: number = 100;
let valB: number = 300;

let Addition = (a: number, b: number): number => {
	return a + b;
}

let Subtraction = (a: number, b: number): number => {
	return a - b;
}

let Multiplication = (a: number, b: number): number => {
	return a * b;
}

let Division = (a: number, b: number): number => {
	return a / b;
}

let Reminder = (a: number, b: number): number => {
	return a % b;
}

console.log(Addition(valA, valB));
console.log(Subtraction(valA, valB));
console.log(Multiplication(valA, valB));
console.log(Division(valA, valB));
console.log(Reminder(valA, valB));