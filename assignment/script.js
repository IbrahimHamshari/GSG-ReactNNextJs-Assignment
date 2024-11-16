// Task 2
function calculateSumAndAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return { sum, average };
}

// Task 3
// I wasn't able to do it in constant time, so I've done in a linear time, used the Set data structure to be as efficient as possible
function removeDuplicates(strings) {
  return [...new Set(strings)];
}
