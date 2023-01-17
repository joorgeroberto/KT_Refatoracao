const { example3 } = require('../src/OriginalCode/example3');
// const { example3 } = require('../src/RefactoredCode/example3');

const plans = require('../__mocks__/utils/plans.json');

describe('Functions tests', () => {
  test('should be able to return netflix\'s summer charge value correctly', () => {
    // Arrange
    const netflixPlan = plans.find((plan) => plan.name === 'netflix');
    const expectedValue = 275;

    // Act 
    const result = example3(netflixPlan, '2023-01-13T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return Netflix\'s regular charge value correctly', () => {
    // Arrange
    const netflixPlan = plans.find((plan) => plan.name === 'netflix');
    const expectedValue = 310;

    // Act 
    const result = example3(netflixPlan, '2023-09-13T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return HBO\'s summer charge value correctly', () => {
    // Arrange
    const hboPlan = plans.find((plan) => plan.name === 'hbo');
    const expectedValue = 250;

    // Act 
    const result = example3(hboPlan, '2023-08-21T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return HBO\'s regular charge value correctly', () => {
    // Arrange
    const hboPlan = plans.find((plan) => plan.name === 'hbo');
    const expectedValue = 155;

    // Act 
    const result = example3(hboPlan, '2023-10-21T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return Amazon\'s summer charge value correctly', () => {
    // Arrange
    const amazonPlan = plans.find((plan) => plan.name === 'amazon');
    const expectedValue = 10;

    // Act 
    const result = example3(amazonPlan, '2023-01-13T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return Amazon\'s regular charge value correctly', () => {
    // Arrange
    const amazonPlan = plans.find((plan) => plan.name === 'amazon');
    const expectedValue = 5.5;

    // Act 
    const result = example3(amazonPlan, '2023-09-13T17:09:58.135Z', 5);

    //Assert
    expect(result).toBe(expectedValue);
  });
});