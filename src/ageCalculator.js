export default class AgeCalculator {
	constructor(earthAge) {
		this.planetYearsPerEarthYear = {
			"Mercury": 0.24,
			"Venus": 0.62,
			"Mars": 1.88,
			"Jupiter": 11.86
		}

		this.earthAge = earthAge;
		this.mercuryAge = this.calculateMercuryAge();
		this.venusAge = this.caluclateVenusAge();
		this.marsAge = this.calculateMarsAge();
		this.jupiterAge = this.calculateJupiterAge();
	}

	calculatePlanetAge(planetName) {
		return Math.floor(this.earthAge / this.planetYearsPerEarthYear[planetName]);
	}

	calculateMercuryAge() {
		return this.calculatePlanetAge("Mercury");
	}

	caluclateVenusAge() {
		return this.calculatePlanetAge("Venus");
	}

	calculateMarsAge() {
		return this.calculatePlanetAge("Mars");
	}

	calculateJupiterAge() {
		return this.calculatePlanetAge("Jupiter");
	}
}