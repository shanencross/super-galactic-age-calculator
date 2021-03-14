import AgeCalculator from "./../src/ageCalculator.js"

describe("AgeCalculator", () => {
	let ageCalculator;
	beforeEach(() => {
		// Sample ageCalculator with Earth age of 22, and life expectancy of 95
		ageCalculator = new AgeCalculator(22, 95);
	});
	test("Should create an age calculator object with the proper Earth age", () => {
		expect(ageCalculator.earthAge).toEqual(22);
	});
		
	test("Should create an age calculator object with the proper Mercury age. 1 Mercury year is .24 Earth years", () => {
		expect(ageCalculator.mercuryAge).toEqual(91);
	});

	test("Should create an age calculator object with the proper Venus age. 1 Venus year is .62 Earth years.", () => {
		expect(ageCalculator.venusAge).toEqual(35);
	});

	test("Should create an age calculator object with the proper Mars age. 1 Mars year is 1.88 Earth years.", () => {
		expect(ageCalculator.marsAge).toEqual(11);
	});

	test("Should create an age calculator object with the proper Jupiter age. 1 Jupiter year is 11.86 Earth years.", () => {
		expect(ageCalculator.jupiterAge).toEqual(1);
	});

	test("Should create an age calculator object with the proper Earth years left to live. For example, if someone is 22 with a life expectancy of 95, their Earth years left to live is 95 - 22 = 73.", () => {
		expect(ageCalculator.earthYearsLeftToLive).toEqual(73);
	});

	test("Should create an age calculator object with the proper Mercury years left to live.", () => {
		expect(ageCalculator.mercuryYearsLeftToLive).toEqual(304);
	});

	test("Should create an age calculator object with the proper Venus years left to live.", () => {
		expect(ageCalculator.venusYearsLeftToLive).toEqual(118);
	});

	test("Should create an age calculator object with the proper Mars years left to live.", () => {
		expect(ageCalculator.marsYearsLeftToLive).toEqual(39);
	});

	test("Should create an age calculator object with the proper Jupiter years left to live.", () => {
		expect(ageCalculator.jupiterYearsLeftToLive).toEqual(6);
	});
});

describe("AgeCalculator.prototype.outputYear", () => {
	let ageCalculator;
	beforeEach(() => {
		// Sample ageCalculator with Earth age of 22, and life expectancy of 95
		ageCalculator = new AgeCalculator(22, 95);
	});
	test("Given a year, should output a string with the word years attached. For example, given 22, should output '22 years'", () => {
		expect(ageCalculator.outputYear(22)).toEqual("22 years");
	});

	test("Given a year, should output a string with the word years attached. If the number is 1, the word year should be attached instead, i.e. '1 year'.", () => {
		expect(ageCalculator.outputYear(1)).toEqual("1 year");
	});
});