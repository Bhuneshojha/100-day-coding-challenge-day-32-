//          100 days of coding challenge ( DAY 32 )

// Question 01
const words:string[] = ["Hello","Iam","Using","On-screen","Keyboard"];
const lengths: number[] = words.map(word => word.length);
console.log(lengths) //Outputs [ 5, 3, 5, 9, 8 ]
// Each number in the new array represents the length of the corresponding word in the original array.
// Question 02
function filterGreaterThanTen(numbers:number[]): number[]{
return numbers.filter(numbers => numbers > 10);
}
const numbers:number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers))
// The new array contains only the numbers that are greater than 10.
//   Question 03 
// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const number: number[] = [1, 2, 3, 5, 5];
console.log(calculateSum(numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
