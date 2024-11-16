// Task 2
function calculateSumAndAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return { sum, average };
}
