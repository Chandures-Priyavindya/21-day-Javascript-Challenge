function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}
console.log(isPalindrome("got"));