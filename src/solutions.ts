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

// Todo: Problem 2:
const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (!value) {
      return "Inactive";
    } else {
      return "Active";
    }
  }
};

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
