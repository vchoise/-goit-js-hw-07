let data = `<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>`
document.querySelector('body').insertAdjacentHTML('afterbegin', data);
let input = document.getElementById('name-input');
let output = document.getElementById('name-output');

const getUserName = () => {
    input.value ? output.innerText = input.value : output.innerText = 'незнакомец' ;
}
input.addEventListener("input", getUserName);
