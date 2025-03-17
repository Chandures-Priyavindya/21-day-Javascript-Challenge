//find largest number of an array
function findLargestNumber(arr){
 let largest=arr[0];
 for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
 }
 return largest;
}
const numbers=[10,23,44,21,5];
console.log(findLargestNumber(numbers));