const { example2 } = require('../src/OriginalCode/example2');
// const { example2 } = require('../src/RefactoredCode/example2');

const invoices = require('../__mocks__/utils/invoices.json');

describe('Functions tests', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2023, 0, 13));
  });

  test('should be able to return Jorge\'s owing correctly', () => {
    // Arrange
    const jorgesInvoice = invoices.find((invoice) => invoice.customer === 'Jorge de Carvalho');
    let expectedValue = '\n***********************' +
                        '\n**** Customer Owes ****' +
                        '\n***********************\n' +
                        '\nname: Jorge de Carvalho' +
                        '\namount: 300' +
                        '\ndue: 1/13/2023';

    // Act 
    const result = example2(jorgesInvoice);

    //Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return Paulo\'s owing correctly', () => {
    // Arrange
    const paulosInvoice = invoices.find((invoice) => invoice.customer === 'Paulo Abinair');
    let expectedValue = '\n***********************' +
                        '\n**** Customer Owes ****' +
                        '\n***********************\n' +
                        '\nname: Paulo Abinair' +
                        '\namount: 90' +
                        '\ndue: 1/13/2023';

    // Act
    const result = example2(paulosInvoice);
    
    // Assert
    expect(result).toBe(expectedValue);
  });

  test('should be able to return Soraya\'s owing correctly', () => {
    // Arrange
    const sorayasInvoice = invoices.find((invoice) => invoice.customer === 'Soraya Quaresma');
    let expectedValue = '\n***********************' +
                        '\n**** Customer Owes ****' +
                        '\n***********************\n' +
                        '\nname: Soraya Quaresma' +
                        '\namount: 900' +
                        '\ndue: 1/13/2023';

    // Act
    const result = example2(sorayasInvoice);
    
    // Assert
    expect(result).toBe(expectedValue);
  });
});