document.querySelector('body').insertAdjacentHTML('afterbegin', '<ul id="ingredients"></ul>');

const ingredients = ['Картошка','Грибы','Чеснок','Помидоры','Зелень','Приправы',];
let my_div = newDiv = null;
const addElement = (text) => {
    let newDiv = document.createElement("li");
    newDiv.innerText = text;
    my_div = document.querySelector('#ingredients');
    document.body.insertBefore(newDiv, my_div);
}
ingredients.forEach(elem => addElement(elem));

