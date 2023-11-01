import fahrenheitToCelsius from './fahrenheitToCelsius';

describe('Fahrenheit to celsius conversion', () => {
  it('Does the math correctly', () => {
    expect(fahrenheitToCelsius(90)).toBeCloseTo(32);
  });

  it('Handles negative numbers properly', () => {
    expect(fahrenheitToCelsius(-1000)).toBeCloseTo(-574);
  });
});
