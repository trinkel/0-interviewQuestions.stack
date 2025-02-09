const evaluatePostfix = (str) => {
	const answer = str.split('').reduce((stack, b) => {
		if (!isNaN(b)) {
			stack.push(Number(b));
		} else {
			if (stack.length < 2) {
				console.log(
					`\nStack underflow\n   Stack: [${stack}]\n   Current operand: ${b}`
				);
				return [];
			}

			const right = stack.pop();
			const left = stack.pop();

			switch (b) {
				case '+':
					stack.push(left + right);
					break;
				case '-':
					stack.push(left - right);
					break;
				case '*':
					stack.push(left * right);
					break;
				case '/':
					stack.push(left / right);
					break;
				case '%':
					stack.push(left % right);
					break;
				default:
					console.log(`\n${b} is not a valid operator\nStack: [${stack}]\n`);
					return [];
			}
		}
		return stack;
	}, []);

	if (answer.length !== 1) {
		console.table(
			`\nWe're out of input but there's stuff left on the stack.\n   Stack: [${answer}]\n   Last value: [${answer.slice(
				-1
			)}]\n`
		);
		return [];
	}

	return answer[0];
};

const expressions = [
	'12+', // 3
	'56+7*', // 77
	'452*+5+', // 19
	'5935+%9--', // 10
	'96/99+-45+53+4*/32*48-*', //-24
	'31+92+-45+4*/4-8-', //-12.194
	'31+92+-45+4*/4-8-*/+/', // Stack underflow
	'31+92+-45+4*k', // Not valid
];

expressions.forEach((expr) =>
	console.log(`Answer: ${evaluatePostfix(expr)}\n-----------\n`)
);
