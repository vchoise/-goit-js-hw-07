let data = `<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>`
document.querySelector('body').insertAdjacentHTML('afterbegin', data);

let input = document.getElementById('font-size-control');
let output = document.getElementById('text');
const fnFontSizeEdit = () => {
    output.style.fontSize = input.valueAsNumber+"px"
}
input.addEventListener('input', fnFontSizeEdit);
output.style.fontSize = input.valueAsNumber+"px";
