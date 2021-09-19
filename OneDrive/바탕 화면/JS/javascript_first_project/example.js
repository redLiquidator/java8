console.log("example.js");
console.warn("don't do it!");
console.error("error!");

let name = "Hella";
let age = 6;
//String concatenation
console.log("Hello I am " + name);
console.log("Hellow I am " + name + " My age is " + age);
console.log(`Hello I am ${name} My age is ${age}`);

let str = 'I am drinking iced tea 123  ';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());     

str = 'I am typing';
console.log(str.split(' '));
console.log(str.replace(5,10))

str = 'I, am, typing';
console.log(str.split(', '));
 //result will be array 
//array
let fruits = ['apple','grape','watermelon'];
console.log(fruits[0]); 
fruits.push('strawberry'); //add an element of an array
console.log(fruits);
fruits.pop();  //remove the last element of an array
console.log(fruits);
fruits.pop('apple');
console.log(fruits);

//object
let person = {
    firstName: 'mou',
    lastName: 'Ibrahim',
    age: 30,
    job: 'Developer',
    married:true
}

console.log(person.age);
console.log(person.job);

person.weight= '40kg';
console.log(person.weight);
console.log(person);

//let vs const
//const value shoud not change. error message comes out
const array = [1,2,3]
array.push(4) = 6; //works
array = [4,4,4]; //error. cannot change the full array package

//var vs let - memory efficient
//var remains outside of for loop

array= [1,2,3,4,5];
console.log(array[2]);
object1 = { keyname1:value1, keyname2:value2} 

object1.keyname2;

//String
//Number
//array
//object
//Boolean
//function