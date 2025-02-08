function permute(input) {
	const inputArr = input.split('');
	const softArr = input.split('');
	const length = inputArr.length;
	let output = [];

	output.push(inputArr.map((char) => char));
	for (let i = 1; i < length; i++) {
		let looseElement = softArr.shift();
		softArr.push(looseElement);
		output.push(softArr.map((char) => char));
		// console.dir(output);
	}
	return output;
}

output = permute('abcd');

console.log(output);
