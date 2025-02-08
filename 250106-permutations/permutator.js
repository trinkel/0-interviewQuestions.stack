function permute(input) {
	const inputArr = input.split('');
	// const softArr = input.split('');
	const length = inputArr.length;
	let output = [];

	output.push(
		inputArr.map((char, i, arr) => {
			let result = [];
			const softArr = arr.toSpliced(i, 1);
			for (let j = 0; j < length; j++) {
				result.push(`${char}${softArr.join('')}`);
				const looseEl = softArr.shift();
				softArr.push(looseEl);
			}
			return result;
		})
	);

	return output.flat(Infinity);
}

output = permute('abcd');

console.log(output);
console.log('_______________________________________');
