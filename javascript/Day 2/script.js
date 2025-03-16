function isPalindrome(str){
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));

function reverseString(str){
  return str.split('').reverse().join('');
}
console.log(reverseString("task"));