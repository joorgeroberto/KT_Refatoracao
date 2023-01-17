const { example1 } = require('../src/OriginalCode/example1');
// const { example1 } = require('../src/RefactoredCode/example1');

const orders = require('../__mocks__/utils/orders.json');

describe('Functions tests', () => {
  test('should be able to calculate BigCo I order value correctly', () => {
    // Arrange
    const BigCoI = orders.find((order) => order.customer === 'BigCo I');

    // Act
    const result = example1(BigCoI);

    // Assert
    expect(result).toBe(550);
  });
  
  test('should be able to calculate BigCo II order value correctly', () => {
    // Arrange
    const BigCoII = orders.find((order) => order.customer === 'BigCo II');
    
    // Act
    const result = example1(BigCoII);

    // Assert
    expect(result).toBe(15100);
  });

  test('should be able to calculate BigCo III order value correctly', () => {
    // Arrange
    const BigCoIII = orders.find((order) => order.customer === 'BigCo III');

    // Act
    const result = example1(BigCoIII);

    // Assert
    expect(result).toBe(7600);
  });
});