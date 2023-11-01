import fahrenheitToCelsius from './tempConversion';

describe('Temperature conversion function', () => {
  it('Does the math correctly', () => {
    expect(fahrenheitToCelsius(90)).toBeCloseTo(32);
  });

  it('Handles negative numbers properly', () => {
    expect(fahrenheitToCelsius(-1000)).toBeCloseTo(-574);
  });
});
