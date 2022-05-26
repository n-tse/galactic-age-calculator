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

  mercuryLifeRemaining () {
    return Math.round((this.lifeExpectancy - this.age) / .24);
  }

  venusLifeRemaining () {
    return Math.round((this.lifeExpectancy - this.age) / .62);
  }

  marsLifeRemaining () {
    return Math.round((this.lifeExpectancy - this.age) / 1.88);
  }

  jupiterLifeRemaining () {
    return Math.round((this.lifeExpectancy - this.age) / 11.86);
  }

  yearsBeyondExpectancy () {
    if (this.age > this.lifeExpectancy) {
      return this.age - this.lifeExpectancy;
    } else {
      return this.lifeExpectancy - this.age;
    }
  }
}