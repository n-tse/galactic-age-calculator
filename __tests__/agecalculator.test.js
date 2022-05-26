import AgeCalculator from "../src/js/agecalculator";

describe('AgeCalculator', () => {
  
  test('should correctly create an ageCalculator object with two properties', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.age).toEqual(25);
    expect(ageCalculator.lifeExpectancy).toEqual(100);
  });

  test('should correctly calculate the users age in Mercury years', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.convertMercuryYears()).toEqual(104);
  });
});