function permute(input) {
	const inputArr = input.split('');
	let softArr = input.split('');
	const length = inputArr.length;
	let output = [];

	output.push(
		inputArr.map((char) => {
			const x = char;
			arr = [];
			for (let i = 0; i < length; i++) {
				arr.push(x);
			}
			return arr;
		})
	);

	output = output.flat(1);

	console.log('Output 1:');
	console.log(output);

	result = output.map((arr1) => {
		arr2 = arr1.map((char, i) => {
			let str = '';
			let j = 0;
			softArr = input.split('');
			if (j !== i) {
				console.log(j + ' | ' + char + ' | ' + softArr.join(''));
				str = char + softArr.join();
				looseElement = softArr.shift();
				softArr.push(looseElement);
				j++;
			}
			return str;
		});
		return arr2;
	});

	return result; //output.flat();
}

output = permute('abcd');

console.log('Final Output');
console.log(output);
console.log('___________________________________________');
