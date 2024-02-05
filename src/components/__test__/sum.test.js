import { sum } from "../sum";
/*
Here, test is a function which take two arguments, the first argument take a string which is a description for what we are testing for and second argument is a callback function which is used for writing code for our test cases.
*/

test('Sum function should calculate the sum of two numbers', () => {
    const result = sum(3, 4);
    expect(result).toBe(7) //Assertion
})
