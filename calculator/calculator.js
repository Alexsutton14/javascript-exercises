function add (inputA, inputB) {
	return inputA + inputB;	
}

function subtract (inputA, inputB) {
	return inputA - inputB;
}

function sum (inputArray) {
	let output = 0;
	inputArray.forEach(element => {
		output += element;
	});
	return output;
}

function multiply (inputArray) {
	let output = 0;
	output = inputArray[0]*inputArray[1];
	for(let i = 2; i<inputArray.length; i++){
		output *=inputArray[i];
	}
	return output;
}

function power(input, powerOf) {
	let output = input;
	if(powerOf > 1){
		for(let i=1; i<powerOf; i++){
			output *= input;
		}
	}
	return output;
}

function factorial(inputNumber) {
	if(inputNumber == 0){
		return 1;
	}
	let output = inputNumber;
	for(let i=inputNumber-1; i>1; i--){
		output *= i;
		console.log(output);
	}
	return output;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}