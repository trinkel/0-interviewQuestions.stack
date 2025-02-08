const evaluatePostfix = (str) => {
	answer = str.split('').reduce((a, b) => {
		if (Number(b)) {
			a.push(Number(b));
			return a;
		} else {
			if (a.length < 2) {
				console.log(
					`\nStack underflow\n   Stack: [${a}]\n   Current operand: ${b}`
				);
				return [];
			}

			switch (b) {
				case '+':
					a.push(Number(a.splice(-2, 1)) + Number(a.splice(-1, 1)));
					return a;
					break;
				case '-':
					a.push(a.splice(-2, 1) - a.splice(-1, 1));
					return a;
					break;
				case '*':
					a.push(a.splice(-2, 1) * a.splice(-1, 1));
					return a;
					break;
				case '/':
					a.push(a.splice(-2, 1) / a.splice(-1, 1));
					return a;
					break;
				case '%':
					a.push(a.splice(-2, 1) % a.splice(-1, 1));
					return a;
					break;
				default:
					console.log(`\n${b} is not a valid operator\nStack: [${a}]\n`);
					return [];
			}
		}
	}, []);

	if (answer.length > 1) {
		console.table(
			`\nWe're out of input but there's stuff left on the stack.\n   Stack: [${answer}]\n   Last value: [${answer.slice(
				-1
			)}]\n`
		);

		return [];
	}

	return answer.join();
};

const str = [
	'12+', // 3
	'56+7*', // 77
	'452*+5+', // 19
	'5935+%9--', // 10
	'96/99+-45+53+4*/32*48-*', //-24
	'31+92+-45+4*/4-8-', //-12.194
	'31+92+-45+4*/4-8-*/+/', // Stack underflow
	'31+92+-45+4*k', // Not valid
];

str.forEach((str) =>
	console.log(`Answer: ${evaluatePostfix(str)}\n-----------\n`)
);
