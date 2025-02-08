type Integer = number;

function longestSubsequence(seq: Integer[]) {
	if (!seq.every((el) => Number.isInteger(el))) {
		throw new Error('List is invalid (contains non-integer)');
		return;
	} else {
		const results: number[] = [];
		let prev: number,
			leng = 1;
		seq.forEach((int: Integer, i) => {
			if (prev) {
				Math.abs(int - prev) === 1 ? leng++ : (leng = 1);
			}
			prev = int;
			leng === 1 ? results.push(0) : results.push(leng);
			// console.log(`results ${i}: ${results}`);
		});
		return results.reduce((a, b) => Math.max(a, b));
	}
}

const seq = [
	[1, 2, 3, 4, 5], // 5
	[5, 4, 3, 2, 1], // 5
	[4, 2, 3, 1, 5], // 2
	[10, 11, 7.2, 8, 9, 12],
	// Runtime error: List is invalid (contains non-integer)
	[10, 11, 7, 8, 9, 12, 3, 6, 24, 25, 26, 27, 28, 29, 10, 11, 15, 20], // 6
	[35, 114, 115, 116, 117, 102, 115.13, 45, 46, 47, 48],
	// Runtime error: List is invalid (contains non-integer)
	[17, 345, 49, 45, 43, 12], // 0,
	// [44, 77, 46, 47, 48, 'string', 50],
	// Typescript: Compiler error
	// Javascript: Runtime error: List is invalid (contains non-integer)
];

for (var i = 0; i < seq.length; i++) {
	try {
		console.dir(`[${seq[i]}]: Longest sequence: ${longestSubsequence(seq[i])}`);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
}
