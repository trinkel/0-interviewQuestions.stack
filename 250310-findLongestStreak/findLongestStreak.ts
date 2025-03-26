const findLongestStreak = (values: boolean[], goal: number): number => {
	let streak = 0;
	const returns = values.reduce((streak, value) => (value ? streak + 1 : 0), 0);
	return returns >= goal ? returns : 0;
};

console.log(findLongestStreak([true, true, false, true, true, true], 3)); // 3;

console.log(findLongestStreak([true, true, true, false, true], 4)); // 0;

console.log(findLongestStreak([true, true, true, true], 2)); // 4;
