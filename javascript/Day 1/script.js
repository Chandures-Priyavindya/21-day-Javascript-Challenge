// Function to find the second-largest number in an array
function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Return null if there aren't enough elements
    }
    
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}
console.log(secondLargest([2,3]));

//function to reverse String
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("how"));

function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}
console.log(isPalindrome("got"));
