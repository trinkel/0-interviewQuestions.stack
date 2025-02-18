const findShieldBreak = (hits: number[], capacity: number): number => {
	let total = 0,
		breakIndex = -1; // fallthrough value
	for (let i = 0; i < hits.length; i++) {
		total += hits[i];
		if (total > capacity) {
			breakIndex = i;
			break; // Exit if condition is met
		}
	}
	return breakIndex;
};

const params = [
	{
		hits: [10, 20, 30, 40],
		capacity: 50,
	}, // 2
	{ hits: [1, 2, 3, 4], capacity: 20 }, // -1
	{ hits: [50], capacity: 30 }, //0
];

params.forEach((param) =>
	console.log(
		`The final hit index: ${findShieldBreak(param.hits, param.capacity)}`
	)
);
