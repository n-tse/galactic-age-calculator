import AgeCalculator from "../src/js/agecalculator";

describe('AgeCalculator', () => {
  
  test('should correctly create an ageCalculator object with two properties', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.age).toEqual(25);
    expect(ageCalculator.lifeExpectancy).toEqual(100);
  });
});