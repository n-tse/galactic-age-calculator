export default class AgeCalculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  convertMercuryYears () {
    return Math.round(this.age / .24);
  }

  convertVenusYears () {
    return Math.round(this.age / .62);
  }

  convertMarsYears () {
    return Math.round(this.age / 1.88);
  }

  convertJupiterYears () {
    return Math.round(this.age / 11.86);
  }
}