/**
 * Declare a variable `swapped`, that indicate if any values were swapped during the current iteration.
 * Use the spread operator(...) to clone the original array.
 * Use a 'for' loop to iterate over the elements of cloned array, terminating before the last element.
 * Use a neste 'for' loop to iterate over the segment of the array between 0 and i, swapping any adjacent out of order elements and setting swapped to true.
 * if 'swapped' is 'false' after an iteration, no more changed are needed, so the cloned array is returned.
 */

const bubbleSort = arr => {
    let swapped = false;
    const a = [...arr];
    for (let i = 1; i < a.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < a.length - i; j++) {
            if(a[j+1] < a[j]) {
                [a[j+1], a[j]] = [a[j], a[j+1]];
                swapped = true;
            }
        }
        if (!swapped) {
            return a;
        }
    }
    return a;
}