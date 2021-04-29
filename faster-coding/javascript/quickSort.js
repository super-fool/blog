/**
 * Sorts an array of numbers, using the quickSort algorithm.
 * Use Recursion.
 * Use the spread operator(...) to clone the original array.
 * if the length of the array is less than 2, return the cloned array.
 * Use `Match.floor()` to calculate the index of the pivot element.
 * Use `Array.prototype.reduce()` and `Array.prototype.push()` to split the array into two subarrays, destructuring the result into two arrays.
 * Recursively call `quickSort()` on the created subarrays.
 */

const quickSort = (arr) => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [low, high] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i !== pivotIndex)) {
        acc[0].push(val);
      } else {
        acc[1].push(val);
      }
    },
    [[], []]
  );
  return [...quickSort(low), pivot, ...quickSort(high)];
};
