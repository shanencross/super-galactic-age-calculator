export default class AgeCalculator {
	constructor(earthAge, earthLifeExpectancy) {
		this.planetYearsPerEarthYear = {
			"earth": 1,
			"mercury": 0.24,
			"venus": 0.62,
			"mars": 1.88,
			"jupiter": 11.86
		}

		this.earthAge = earthAge;
		this.mercuryAge = this.calculateMercuryAge();
		this.venusAge = this.caluclateVenusAge();
		this.marsAge = this.calculateMarsAge();
		this.jupiterAge = this.calculateJupiterAge();

		this.earthLifeExpectancy = earthLifeExpectancy;
		
		this.earthYearsLeftToLive = this.calculateYearsLeftToLive("earth");
		this.mercuryYearsLeftToLive = this.calculateYearsLeftToLive("mercury");
		this.venusYearsLeftToLive = this.calculateYearsLeftToLive("venus");
		this.marsYearsLeftToLive = this.calculateYearsLeftToLive("mars");
		this.jupiterYearsLeftToLive = this.calculateYearsLeftToLive("jupiter");
	}

	calculateYearsLeftToLive(planetName) {
		const yearsLeftToLive = this.earthLifeExpectancy - this.earthAge;
		return Math.round(yearsLeftToLive / this.planetYearsPerEarthYear[planetName]);
	}

	calculatePlanetAge(planetName) {
		return Math.floor(this.earthAge / this.planetYearsPerEarthYear[planetName]);
	}

	calculateMercuryAge() {
		return this.calculatePlanetAge("mercury");
	}

	caluclateVenusAge() {
		return this.calculatePlanetAge("venus");
	}

	calculateMarsAge() {
		return this.calculatePlanetAge("mars");
	}

	calculateJupiterAge() {
		return this.calculatePlanetAge("jupiter");
	}

	outputYear() {

	}
}