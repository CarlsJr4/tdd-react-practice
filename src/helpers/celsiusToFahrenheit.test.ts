import celsiusToFarhenheit from './celsiusToFahrenheit';

describe('Celsius to Fahrenheit conversion', () => {
  it('Does the math correctly', () => {
    expect(celsiusToFarhenheit(32)).toBeCloseTo(89);
  });

  it('Handles negative numbers properly', () => {
    expect(celsiusToFarhenheit(-574)).toBeCloseTo(-1002);
  });
});
