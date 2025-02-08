let indices: number[] = [];

const findAnagrams = (s: string, p: string): number[] => {
	const indices: number[] = [];

	for (let i = 0; i < s.length; i++) {
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
	indices = findAnagrams(...subject);
	console.log(`${subject[1]} in ${subject[0]} (indices): [${indices}]`);
});
