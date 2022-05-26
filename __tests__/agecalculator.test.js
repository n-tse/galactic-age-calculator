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

  test('should correctly calculate the users age in Venus years', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.convertVenusYears()).toEqual(40);
  });

  test('should correctly calculate the users age in Mars years', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.convertMarsYears()).toEqual(13);
  });

  test('should correctly calculate the users age in Jupiter years', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.convertJupiterYears()).toEqual(2);
  });

  test('should correctly calculate the users remaining years of life on Mercury', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.mercuryLifeRemaining()).toEqual(313);
  });

  test('if the users age has surpassed the life expectancy, should correctly calculate the number of years the user has lived past their life expectancy', () => {
    const ageCalculator = new AgeCalculator(125, 100);
    expect(ageCalculator.yearsBeyondExpectancy()).toEqual(25);
  }); 

  test('if the users age has not surpassed the life expectancy, should correctly calculate the number of years the user has left until they reach their life expectancy', () => {
    const ageCalculator = new AgeCalculator(75, 100);
    expect(ageCalculator.yearsBeyondExpectancy()).toEqual(25);
  }); 

  test('should correctly calculate the users remaining years of life on Venus', () => {
    const ageCalculator = new AgeCalculator(25, 100);
    expect(ageCalculator.venusLifeRemaining()).toEqual(121);
  });
});