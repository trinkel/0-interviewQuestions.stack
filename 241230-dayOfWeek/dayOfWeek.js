function newYearsDay(year) {
	const options = { weekday: 'long' };
	const day = new Date(`${year}-01-01`).getDay();
	return new Intl.DateTimeFormat('en-US', options).format(day);
}

const year = 2025;
console.log(`New Year's Day ${year} falls on ${newYearsDay(year)}`);
