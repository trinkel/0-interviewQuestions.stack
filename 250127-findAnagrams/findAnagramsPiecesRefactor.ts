/*
Key Changes:
- Removed the global indices variable and used a local variable within the forEach loop to store the result of findAnagrams.
- Adjusted the loop condition in findAnagrams to i <= s.length - p.length to prevent unnecessary iterations.
	- By using `i <= s.length - p.length` instead of just `i <= s.length`, the loop stops iterating once there aren't enough characters left in s to match the length of p. This is because any substring starting beyond `s.length - p.length` would be too short to be an anagram of p.
- ~~Used template literals correctly in the console.log statement.~~
	- This was an incorrect statement from Pieces
*/

export function app() {
	// Wrapper to avoid function naming conflicts with other files
	const findAnagrams = (s: string, p: string): number[] => {
		const indices: number[] = [];

		for (let i = 0; i <= s.length - p.length; i++) {
			let j = i;
			let test = p.split('');
			const runner = () => {
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

	const subjects: [string, string][] = [
		['cbaebabacd', 'abc'],
		['fish', 'cake'],
		['abab', 'ab'],
		['mononucleosis', 'on'],
		['subsequences', 'es'],
	];

	subjects.forEach((subject) => {
		const indices = findAnagrams(...subject);
		console.log(`${subject[1]} in ${subject[0]} (indices): [${indices}]`);
	});
}

app();
