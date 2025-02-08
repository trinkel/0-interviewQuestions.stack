const natoWords = [
	'Alfa',
	'Bravo',
	'Charlie',
	'Delta',
	'Echo',
	'Foxtrot',
	'Golf',
	'Hotel',
	'India',
	'Juliett',
	'Kilo',
	'Lima',
	'Mike',
	'November',
	'Oscar',
	'Papa',
	'Quebec',
	'Romeo',
	'Sierra',
	'Tango',
	'Uniform',
	'Victor',
	'Whiskey',
	'Xray',
	'Yankee',
	'Zulu',
];

const natoNumbers = [
	'Zero',
	'One',
	'Two',
	'Three',
	'Four',
	'Five',
	'Six',
	'Seven',
	'Eight',
	'Nine',
];

const natoBit = {};
natoWords.forEach((bit) => {
	natoBit[bit.at(0).toLowerCase()] = bit;
});

natoNumbers.forEach((num, i) => {
	natoBit[i.toString()] = num;
});

// Add some punctuation
natoBit['.'] = '(period)';
natoBit[','] = '(comma)';
natoBit[' '] = '(space)';
natoBit['!'] = '(exclamation)';

function natoify(str) {
	// replace accented characters with latin "equivalent" (not exhaustive)
	str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	return str
		.split('')
		.map((char) => natoBit[char.toLowerCase()])
		.join(' ');
}

console.dir(natoify('Love 3 Crème Brûlée!'));
// 'Lima Oscar Victor Echo (space) Three (space) Charlie Romeo Echo Mike Echo (space) Bravo Romeo Uniform Lima Echo Echo (exclamation)'
