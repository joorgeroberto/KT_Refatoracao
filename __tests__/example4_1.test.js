const { example4_1 } = require('../src/OriginalCode/example4_1');
// const { example4_1 } = require('../src/RefactoredCode/example3');


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

  test('should be able to return generic error when divided value is null.', () => {
    // Arrange
    const divided = null;
    const divisive = 2;
    const expectedMessage = 'Math error!';

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
    const expectedMessage = 'Math error!';

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
    const expectedMessage = 'Math error!';

    // Act
    // Assert
    expect(() => 
      example4_1({divided: divided, divisive: divisive})
    ).toThrow(expectedMessage);
  });
});