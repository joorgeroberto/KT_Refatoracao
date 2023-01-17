const { example4_1 } = require('../src/RefactoredCode/example4_1');


describe('Functions tests', () => {
  test('should be able to return expected operation result.', () => {
    // Arrange
    const divided = 10;
    const divisive = 2;
    const expectedValue = 5;

    // Act 
    const result = example4_1({divided: divided, divisive: divisive});

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return invalid divided value error when divided value is null.', () => {
    // Arrange
    const divided = null;
    const divisive = 2;
    const expectedMessage = 'Divided value can\'t be null.';

    // Act
    // Assert
    expect(() => 
      example4_1({divided: divided, divisive: divisive})
    ).toThrow(expectedMessage);
  });

  test('should be able to return generic error when divisive value is null.', () => {
    // Arrange
    const divided = 10;
    const divisive = null;
    const expectedMessage = 'Divisive value can\'t be null.';

    // Act
    // Assert
    expect(() => 
      example4_1({divided: divided, divisive: divisive})
    ).toThrow(expectedMessage);
  });

  test('should be able to return  generic error when divisive value is zero.', () => {
    // Arrange
    const divided = 10;
    const divisive = 0;
    const expectedMessage = 'Divisive value can\'t be zero.';

    // Act
    // Assert
    expect(() => 
      example4_1({divided: divided, divisive: divisive})
    ).toThrow(expectedMessage);
  });
});