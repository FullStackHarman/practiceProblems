

// Given array
const originalArray = [1, 2, 3, 4, 5];

// Use slice to create a new array containing elements from index 1 to 3 (exclusive).
const newArray = sliceArray(originalArray, 1, 3);
// Expected Output: [2, 3]



// Given array
const originalArray1 = [1, 2, 3, 4, 5];

// Use slice to create a new array containing elements from the second-to-last element to the last element.
const newArray1 = sliceArray(originalArray, -2);
// Expected Output: [4, 5]

// Given array
const originalArray2 = [1, 2, 3, 4, 5];

// Use slice to create a new array containing elements from index 1 to 3 (exclusive),
// then modify the original array to only contain elements after index 3.
const newArray2 = sliceAndModifyArray(originalArray, 1, 3);
// Expected Output (newArray): [2, 3]
// Expected Output (originalArray): [4, 5]




// Given array
const originalArray3 = [1, 2, 3, 4, 5];

// Use slice with omitted parameters to create a new array with all elements starting from index 2.
const newArray3 = sliceWithOmittedParams(originalArray);
// Expected Output: [3, 4, 5]



// Given arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Use slice to create a new array containing elements from array1 and concatenate it with array2.
const concatenatedArray = sliceAndConcatArrays(array1, array2);
// Expected Output: [1, 2, 3, 4, 5, 6]




// Given array
const originalArray4 = [1, 2, 3, 4, 5];

// Use slice to create a new array with elements at even indices (0, 2, 4).
const newArray4 = sliceWithStep(originalArray, 0, originalArray.length, 2);
// Expected Output: [1, 3, 5]




// Given array
const originalArray5 = [1, 2, 3, 4, 5];

// Use slice to create a new array, then reverse it.
const reversedArray5 = sliceAndReverse(originalArray);
// Expected Output: [5, 4, 3, 2, 1]


// Given array
const originalArray6 = [1, 2, 3, 4, 5];

// Use slice to create two new arrays with overlapping ranges (e.g., [2, 3, 4] and [3, 4, 5]).
const newArray11 = sliceArray(originalArray, 1, 4);
const newArray22 = sliceArray(originalArray, 2, 5);
// Expected Output (newArray1): [2, 3, 4]
// Expected Output (newArray2): [3, 4, 5]

// Given array
const originalArray7 = [1, 2, 3, 4, 5];

// Use slice to create a new array and insert elements [6, 7] starting from index 2.
const newArray7 = sliceAndInsert(originalArray, 2, 0, 6, 7);
// Expected Output: [1, 2, 6, 7, 3, 4, 5]



// Given array
const originalArray8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use slice in a complex way to create a new array with elements [3, 5, 7, 9].
const newArray8 = advancedSliceChallenge(originalArray);
// Expected Output: [3, 5, 7, 9]
  