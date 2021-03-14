import AgeCalculator from "./../src/ageCalculator.js"

describe('AgeCalculator', () => {
	test('Should create an age calculator object with the proper age', () => {
		let ageCalculator = new AgeCalculator(22);
		expect(ageCalculator.earthAge).toEqual(22);
	});
});