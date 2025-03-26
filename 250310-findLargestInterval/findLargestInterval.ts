const scale = ['C', 'C+', 'C', 'D+', 'E', 'F', 'F+', 'G', 'G+', 'A', 'A+', 'B'];

let previousToneVal = 0;

const findLargestInterval = (tones: string[]) => {
	return tones.reduce((acc, curr, i) => {
		let currentTone = curr.split('');
		let currentToneVal =
			scale.indexOf(currentTone[0]) + Number(currentTone[1]) * 12;
		let interval = 0;
		interval = Math.abs(previousToneVal - currentToneVal);
		previousToneVal = currentToneVal;
		// console.log('a', i, acc, interval);
		if (i === 0) {
			interval = 0;
			return interval;
		}
		// console.log('b', i, acc, interval);
		if (interval > acc) {
			return interval;
		} else {
			return acc;
		}
	}, 0);
};

const intervals = [
	['A0', 'C1', 'G1', 'C2'], //7
	['C4', 'G4', 'C5', 'G3'], //17
	['E2', 'C3', 'G3', 'C8'], //53
];

console.log(intervals.forEach((interval) => findLargestInterval(interval)));
