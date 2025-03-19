//this output will be 2,3,4, because it will print arr[0] to [2]
let arr = [2,3,4,5];
let people=arr.slice(0,3);
console.log(people);//output=2,3,4

//add element to array[0]
let num=[2,4,6];
num.unshift(1);
console.log(num);//output=1,2,4,6

//add 1 and 1 as a elements to the array
let go=[2,4,1,4,4];
go.unshift(1,1);
console.log(go);


