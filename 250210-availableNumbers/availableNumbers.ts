interface AvailableNumbersType {
	ranges: number[][];
	available: number[];
}
const playerPositions: Map<string, AvailableNumbersType> = new Map();

//available numbers from NFL table
playerPositions
	.set('QB', { ranges: [[1, 19]], available: [] })
	.set('RB', {
		ranges: [
			[1, 49],
			[80, 89],
		],
		available: [],
	})
	.set('WR', {
		ranges: [
			[1, 49],
			[80, 89],
		],
		available: [],
	})
	.set('TE', {
		ranges: [
			[1, 49],
			[80, 89],
		],
		available: [],
	})
	.set('OL', {
		ranges: [[50, 79]],
		available: [],
	})
	.set('DL', {
		ranges: [
			[50, 79],
			[90, 99],
		],
		available: [],
	})
	.set('LB', {
		ranges: [
			[1, 59],
			[90, 99],
		],
		available: [],
	})
	.set('DB', { ranges: [[0, 49]], available: [] })
	.set('KP', {
		ranges: [
			[1, 49],
			[90, 99],
		],
		available: [],
	})
	.set('LS', { ranges: [[1, 99]], available: [] });

// expand available numbers
playerPositions.forEach((position) => {
	let available: number[] = [];
	position.ranges.forEach((range) => {
		const length = range[1] - range[0] + 1;
		position.available.push(
			...[...Array(length).keys()].map((n) => n + range[0])
		);
	});
});

const availableNumbers = (player: string, existingNumbers: number[]) => {
	const position = playerPositions.get(player);
	if (position) {
		return position.available.filter((x) => !existingNumbers.includes(x));
	} else {
		console.log(`Player ${player} improperly defined`);
		return [];
	}
};

// console.log(playerPositions.get('WR'));

const players = ['QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'DB', 'KP', 'LS'];
const vikingsNumbers = [
	3, 5, 6, 9, 15, 16, 18, 20, 22, 29, 30, 32, 42, 43, 44, 50, 51, 56, 58, 61,
	64, 65, 67, 71, 75, 78, 83, 84, 87, 94, 97, 98,
];

players.map((player) =>
	console.log(
		`Numbers available for ${player}:\n[${availableNumbers(
			player,
			vikingsNumbers
		)}]\n`
	)
);
