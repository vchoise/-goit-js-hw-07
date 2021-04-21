let doc = `<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>`
document.querySelector('body').insertAdjacentHTML('afterbegin', doc );
const value = document.getElementById('value');
let counterValue = 0;
const increment = () => {counterValue++
    value.innerText = String(counterValue)}
const decrement = () => {counterValue--
    value.innerText = String(counterValue)}

const button = document.getElementById('counter');
button.onclick = () => {event.target.innerText === '-1' ? decrement() : increment()};



