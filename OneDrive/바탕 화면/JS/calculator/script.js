let x = null;
let y = null;
let operation = null;
let tem ="";
let result = 0;

let keys = document.getElementById('key-container');
let reset = document.getElementById('reset');
let resultValue = document.getElementById('result-value');
keys.addEventListener('click', e =>{

   //x operation y
   //x = tem when operation key is entered
   let key =  e.target.innerText;
   if(key == "+" || key == "-" || key == "*" || key == "/" ){
       x = parseInt(tem);
       operation = key;
       tem = "";
       resultValue.innerText = 0 ;
   }else if(key == "="){
       y = parseInt(tem);
       resultValue.innerText = calculate(x,y,operation);
   }else{
        //concatenate all the values of keys with tem
        tem += e.target.innerText;
        resultValue.innerText = tem;
   }
});

function resetCalculator(){
    x=y=operation=null;
    tem = "";
    result = 0;
    resultValue.innerText = 0;
}

reset.addEventListener('click', resetCalculator);

function calculate(x,y,operation){
    let total ;
    switch(operation){
        case "+":
            total = x+y;
            break;
        case "-":
            total = x-y;
            break;
        case "*":
            total = x*y;
            break;
        case "/":
            total = x/y;
            break;
        default:
            console.log('error');                
    }
    return total;
}






