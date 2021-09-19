
const myForm = document.querySelector('#my-form');
const msg =document.querySelector('.msg');
const inputId = document.querySelector('#id');
const inputPassword = document.querySelector('#password');
const users = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(inputId.value === '' || inputPassword.value === ''){
        msg.innerHTML = `empty value. please insert id and password`;
        msg.classList.add('error');
  
        setTimeout( () =>{
            msg.innerHTML = '';
            msg.classList.remove('error');
        }, 3000)
    }else{
        console.log("id: "+inputId.value+" pw: "+ inputPassword.value);
    }

    //if id&password is correct, login
    if( inputId.value === 'jinjoo' && inputPassword.value === '1234'){
        //create li tag
        const li = document.createElement('li');
        //put input values into li tag
        li.innerHTML = `<strong> user ${inputId.value} logged in succesfully </strong>`;
        //insert li into the userlist
        users.appendChild(li);
        //window.open("login_success.html");
    }else{
        const li = document.createElement('li');
        //put input values into li tag
        li.innerHTML = `<strong> login fail. check your id & email </strong>`;
        //insert li into the userlist
        users.appendChild(li);
       // window.open("login_fail.html");
    }
}

