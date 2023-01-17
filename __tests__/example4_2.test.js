const { example4_2 } = require('../src/OriginalCode/example4_2');
// const { example4_2 } = require('../src/RefactoredCode/example4_2');

describe('Functions tests', () => {
  test('should be able to return correct ice cream price when ins\'t premium and doesn\'t have cone or extra toppings.', () => {
    // Arrange
    const parameters = { premium: false, cone: false, toppings: 0 };
    const expectedValue = 17;

    // Act 
    const result = example4_2(parameters);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return correct ice cream price when is premium but doesn\'t have cone and extra toppings.', () => {
    // Arrange
    const parameters = { premium: true, cone: false, toppings: 0 };
    const expectedValue = 21;

    // Act 
    const result = example4_2(parameters);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return correct ice cream price when is premium, have cone but doesn\'t have extra toppings.', () => {
    // Arrange
    const parameters = { premium: true, cone: true, toppings: 0 };
    const expectedValue = 23;

    // Act 
    const result = example4_2(parameters);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return correct ice cream price when is premium, have cone and extra toppings.', () => {
    // Arrange
    const parameters = { premium: true, cone: true, toppings: 2 };
    const expectedValue = 24;

    // Act 
    const result = example4_2(parameters);

    //Assert
    expect(result).toBe(expectedValue);
  });
});