export default class AgeCalculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  convertMercuryYears () {
    return Math.round(this.age / .24);
  }
}