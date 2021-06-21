/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const intsum = function (num1, num2) {
  let sum = null;
  if (num1 === num2) {
    sum = (num1 + num2) * 3;
  } else {
    sum = num1 + num2;
  }
  return sum;
};
console.log("<--EX1-->");
console.log(intsum(3, 3));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const is50 = function (num1, num2) {
  let sum = null;
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
};

console.log("<--EX2-->");
console.log(is50(25, 25));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removecharacter = function (str, position) {
  return str.slice(0, position - 1) + str.slice(position, str.length);
};
console.log("<--EX3-->");
console.log(removecharacter("watermelon", 6));
/*

4)
 Create a function to find the largest of three given integers.
*/

const largeint = function (num1, num2, num3) {
  return Math.max(num1, num2, num3);
};
console.log("<--EX4-->");
console.log(largeint(4, 2, 3));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
