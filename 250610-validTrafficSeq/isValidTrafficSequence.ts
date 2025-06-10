const validSequence = ['green', 'yellow', 'red'];
const jMax = validSequence.length - 1;

const isValidTrafficSequence = (sequence: string[]): boolean => {
	let result = true;
	let j: number;
	sequence.map((color, i) => {
		if (!i) {
			j = validSequence.indexOf(color);
		}

		if (color !== validSequence[j]) {
			result = false;
		}

		j >= jMax ? (j = 0) : j++;
	});

	return result;
};

// Test parameters
const sequences = [
	['red', 'green', 'yellow', 'red', 'green'], // true
	['red', 'yellow', 'green'], // false
	[], // true
];

// Test

sequences.map((sequence) =>
	console.log(
		`[ ${sequence} ] is ${
			isValidTrafficSequence(sequence) ? '' : 'NOT '
		}a valid traffic light sequence.`
	)
);
