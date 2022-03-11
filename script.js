'use strict';

function getSum(a, b) {
  // first check if a is equal to be, if so return a
  if (a === b) {
    return a;
  } else {
    // counter with the end point being the largest number - we need to sort?

    let highEnd = '';
    let lowEnd = '';

    // we need to set the low and high numbers into variables (we don't know which is which)
    if (a < b) {
      lowEnd = a;
      highEnd = b;
    } else if (b < a) {
      lowEnd = b;
      highEnd = a;
    }

    // create an empty array to store all of the numbers in between the two given numbers
    const allNums = [];

    for (let i = lowEnd; i <= highEnd; i++) {
      // push to allNums array
      allNums.push(i);
    }

    // create a variable to store the sum in
    let sum = 0;

    // loop through, add each number together and store each number in the sum variable
    for (let i = 0; i < allNums.length; i++) {
      sum += allNums[i];
    }

    // return the sum of all the numbers (yay!)
    return sum;
  } // end if
} // end function

// THIS CODE NEEDS TO BE REFACTORED
