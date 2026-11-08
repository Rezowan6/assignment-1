// Todo: Problem 1:

const multiplyValue = (
  value: number,
  multiplier: number | undefined = 2,
): number => {
  return value * multiplier;
};

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(10, 0));
