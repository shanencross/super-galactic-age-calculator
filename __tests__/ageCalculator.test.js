import AgeCalculator from "./../src/ageCalculator.js"

describe('AgeCalculator', () => {
	test('Should create an age calculator object with the proper Earth age', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.earthAge).toEqual(22);
	});
		
	test('Should create an age calculator object with the proper Mercury age. 1 Mercury year is .24 Earth years', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.mercuryAge).toEqual(91);
	});

	test('Should create an age calculator object with the proper Venus age. 1 Venus year is .62 Earth years.', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.venusAge).toEqual(35);
	});

	test('Should create an age calculator object with the proper Mars age. 1 Mars year is 1.88 Earth years.', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.marsAge).toEqual(11);
	});

	test('Should create an age calculator object with the proper Jupiter age. 1 Jupiter year is 11.86 Earth years.', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.jupiterAge).toEqual(1);
	});
});