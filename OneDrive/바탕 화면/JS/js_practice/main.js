// //single elements
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// //multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item'); array
// items.forEach(item => console.log(item.innerHTML));

// const ul = document.querySelector('.items');
// //ul.remove();
// //ul.firstElementChild.remove();
// //ul.lastElementChild.remove();
// //ul.children[0].remove();
// //ul.children[1].remove();
// //ul.children[0].innerText = "Helo";
// ul.lastElementChild.innerText = "Last";

const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const users = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (inputName.value === "" || inputEmail.value === "") {
    msg.innerHTML = `empty value. please insert all values`;
    msg.classList.add("error");
    // inputName.addEventListener('focusin', e => {
    //     msg.innerHTML = '';
    //     msg.classList.remove('error');
    // });
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("error");
    }, 3000);
  } else {
    //create li tag
    const li = document.createElement("li");
    //put input values into li tag
    li.innerHTML = `<strong>${inputName.value} : ${inputEmail.value}</strong>`;
    //insert li into the userlist
    users.appendChild(li);
  }
}

const sentence = document.querySelector("#sentence");
const showHide = document.querySelector("#show-hide");

showHide.addEventListener("click", () => {
  sentence.classList.toggle("hide");
});
