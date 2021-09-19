//objectArray 
let obj = {
    key1:[1,2,3,4,5],
    key2:[10,11,12]
}

console.log(obj.key1[2]); //3

//listobject
let list = [{key1:12,key2:34},{key1:56,key2:78}];
console.log(list[1]);

for(let i = 10; i>=0; i--){
    console.log(i);
}

let i = 0;
while(i<=10){
    console.log(i);
    i++;
}


//arrayobject : array has objects as elements

 const todos = [
     {
       id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];

  for(let i = 0; i<todos.length; i++){
      console.log("To Do "+(i+1)+" "+todos[i].text);
      console.log(`Todo ${i+1}: ${todos[i].text}`);
  }
  //result is the same as the above
  //print the array
  for(let item of todos){
    console.log(item.text);
  }
  //can give any name
  for(let anyName of todos){
    console.log(anyName.text);
  }

  //forEach performance is better than for clause
  todos.forEach(function(item){
    console.log(item.text);
  });

 todos.forEach(function(item){
   item.text="0";  //change values of the original array
 });


  let str = 'Important';
  todos.forEach(function(item,i){
    console.log(i);  //index
    console.log(item.text);
  });


function add(num1, num2) {
    return (num1+num2)
}

console.log(`hey bro the result will be${add(1,2)}`)

//map->copied array  can change, but the original map stays the same

//print out or change the data
console.log(todos.map(function(item){
    return item.text;
}))

// = assign a value
// == compare values(doesn't care about type)
// === compare values and its types
let x = '30';
if(w === 30){
console.log();
}

//== -> convert left side to the same type as the right side value.
//and then compare both values

// //print 

//shortcut for if condition
console.log(color == 'red' ? true : false);

 for(let todo of todos){
     if(todo.isComplete === false){
         console.log(todo.text);
     }
 }

 (num1,num2) =>{
     return num1 + num2
 }

 todos.forEach(function(item,i){
     console.log(item.text)
 })

 //js doesn't have list. it has array [..]
 todos.forEach((item,i) =>{
     console.log(item.text);
 }
 )

//  const a =  (num1,num2) =>{
//   return num1 + num2
// }

  const a =  (num1,num2) => num1 + num2
 
  const a =  (num1,num2) => {
    let total = num1+num2;
    return total;
  }

 // only if function has 1 line, I can use this 1 line function form


//console.log(a(1,2));

const b = (num1) => num1 + 5;

function b(num1){
  return num1+5;
}

//if parameter is 1, 
//I can remove parenthesis 
//const b = num1 => num1 + 5;  // o
//const b = num1,num2 => num1 + 5;   //x

//
class Person {}













