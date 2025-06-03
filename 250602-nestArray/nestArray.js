const initialValue = [];

const nestArray = (input) => {
	return input.reduceRight((accumulator, currentValue, i, array) => {
		i === array.length - 1
			? (accumulator = [currentValue])
			: (accumulator = [currentValue].concat([accumulator]));
		return accumulator;
	}, initialValue);
};

// Tests

let inputs = [
	[1, 2, 3, 4], // [1, [2, [3, [4]]]]
	[1], // [1]
	[10, 20, 30, 40, 50, 60], // [10, [20, [30, [40, [50, [60]]]]]]
];

inputs.forEach((input) => {
	console.dir(nestArray(input), {
		depth: null,
		color: true,
		breakLength: Infinity,
		compact: true,
	});
});
