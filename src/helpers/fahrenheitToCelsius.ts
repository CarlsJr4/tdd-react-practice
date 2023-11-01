export default function fahrenheitToCelsius(temperature: number) {
  return Math.floor((temperature - 32) * (5 / 9));
}
