export default class AgeCalculator {
	constructor(earthAge, earthLifeExpectancy) {
		// Maps planet names to conversion factors for years
		this.planetYearsPerEarthYear = {
			"earth": 1,
			"mercury": 0.24,
			"venus": 0.62,
			"mars": 1.88,
			"jupiter": 11.86
		}

		this.earthAge = earthAge;
		this.mercuryAge = this.calculatePlanetAge("mercury");
		this.venusAge = this.calculatePlanetAge("venus");
		this.marsAge = this.calculatePlanetAge("mars");
		this.jupiterAge = this.calculatePlanetAge("jupiter");

		this.earthLifeExpectancy = earthLifeExpectancy;
		
		this.earthYearsLeftToLive = this.calculateYearsLeftToLive("earth");
		this.mercuryYearsLeftToLive = this.calculateYearsLeftToLive("mercury");
		this.venusYearsLeftToLive = this.calculateYearsLeftToLive("venus");
		this.marsYearsLeftToLive = this.calculateYearsLeftToLive("mars");
		this.jupiterYearsLeftToLive = this.calculateYearsLeftToLive("jupiter");
	}

	// Calculate the user's years left to live for a given planet.
	// If the user is older than their life expectancy, the years left to live
	// will be a negative number. This is the number of years they have lived
	// PAST their life expectancy.
	// The value is rounded normally.
	calculateYearsLeftToLive(planetName) {
		const yearsLeftToLive = this.earthLifeExpectancy - this.earthAge;
		return Math.round(yearsLeftToLive / this.planetYearsPerEarthYear[planetName]);
	}

	// Calculate the user's age for a given planet.
	// The value is always rounded DOWN, as is the norm for ages.
	calculatePlanetAge(planetName) {
		return Math.floor(this.earthAge / this.planetYearsPerEarthYear[planetName]);
	}

	// Output a string for a given number of years. For example, 22 yields '22 years'.
	// Likewise, 1 yields '1 year'.
	outputYear(years) {
		let yearString = "year";
		if (years !== 1) {
			yearString = `${yearString}s`;
		}
		return `${years} ${yearString}`;
	}
}