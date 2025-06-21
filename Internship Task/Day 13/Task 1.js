//craete a array of 5 fruits and print the third one

var myarr=["apple","banana","cherry","watermelon","pineapple"]
console.log(myarr[2]);
//push element at add

myarr.push("mango");
console.log(myarr);

//remove element at first

myarr.shift();
console.log(myarr);

//length of the array

console.log(myarr.length);
myarr.forEach(i=>console.log(i));

//reverse the array

console.log(myarr.reverse());

//sum of the array element

var myint=[1,2,3,4,5];
sum=0
myint.forEach(i=>(sum=sum+i));
console.log(sum);
