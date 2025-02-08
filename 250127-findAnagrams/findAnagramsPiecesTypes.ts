/*
Key Improvements:
- Type Alias: Introduced AnagramSubject as a type alias for the tuple [string, string] to make the code more readable.
- Explicit Return Types: Added explicit return types for the runner function (void) and ensured findAnagrams has an explicit return type (number[]).
- Destructuring: Used destructuring in the forEach loop to directly access the elements of the tuple, making the code cleaner and more readable.
*/

export function app() {
	// Wrapper to avoid function naming conflicts with other files

	type AnagramSubject = [string, string];

	const findAnagrams = ([s, p]: AnagramSubject): number[] => {
		const indices: number[] = [];

		for (let i = 0; i <= s.length - p.length; i++) {
			let j = i;
			let test = p.split('');
			const runner = (): void => {
				if (test.indexOf(s[j]) >= 0) {
					test.splice(test.indexOf(s[j]), 1);
					j++;
					test.length ? runner() : indices.push(i);
				} else {
					test = p.split('');
				}
			};
			runner();
		}
		return indices;
	};

	const subjects: AnagramSubject[] = [
		['cbaebabacd', 'abc'],
		['fish', 'cake'],
		['abab', 'ab'],
		['mononucleosis', 'on'],
		['subsequences', 'es'],
	];

	subjects.forEach((subject: AnagramSubject) => {
		const indices = findAnagrams(subject);
		console.log(`${subject[1]} in ${subject[0]} (indices): [${indices}]`);
	});
}

app();
