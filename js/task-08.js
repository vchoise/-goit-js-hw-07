let data = `<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>`
document.querySelector('body').insertAdjacentHTML('afterbegin', data);
const render = document.querySelector('button');
const destroy = render.nextElementSibling;
let amount = 0;

const createBoxes = (iteration) => {
    return `<div class="box" style="height: ${20+iteration*10}px; width: ${20+iteration*10}px; background-color: rgb(${Math.round(255*Math.random())},${Math.round(255*Math.random())},${Math.round(255*Math.random())});"></div>`
}
const fnRender = () => {
    amount = document.querySelector('input').value
    let out = '<div id="box">';
    for (let i=1; i<=amount; i++) {
       let element = createBoxes(i);
       out += element;
    }
    out += `</div>`;
    document.getElementById('boxes').insertAdjacentHTML('afterbegin', out);
};
const fnDel = () => {
  let rem = document.querySelector("#box");
    rem.remove();
}
render.addEventListener("click", fnRender);
destroy.addEventListener("click", fnDel);
