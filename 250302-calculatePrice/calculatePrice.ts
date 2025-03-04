const discount = 0.1;
const week = 60 * 60 * 24 * 7 * 1000;

const calculatePrice = (
	closeDate: Date,
	visitDate: Date,
	price: number
): number => {
	const weeks = Math.floor((closeDate.getTime() - visitDate.getTime()) / week);

	if (weeks <= 0) {
		return price;
	} else {
		return Math.pow(1 - discount, weeks) * price;
	}
};

const priceParams = [
	{ closeDate: '2025-04-01', visitDate: '2025-03-03', price: 100 },
	{ closeDate: '2025-04-01', visitDate: '2025-03-15', price: 50 },
	{ closeDate: '2025-04-01', visitDate: '2025-05-15', price: 75 },
];

const day = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

priceParams.forEach((priceParam) => {
	const closeDate = new Date(priceParam.closeDate);
	const visitDate = new Date(priceParam.visitDate);
	const price = priceParam.price;

	const discPrice = calculatePrice(closeDate, visitDate, price).toFixed(2);

	console.log(
		`Price on ${day[visitDate.getDay()]}, ${
			month[visitDate.getMonth()]
		} ${visitDate.getDate()}, ${visitDate.getFullYear()}: ${discPrice}`
	);
});
