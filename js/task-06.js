let data = `<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>`
document.querySelector('body').insertAdjacentHTML('afterbegin', data);
const fnValidation = () => {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
let input = document.getElementById('validation-input');
input.addEventListener("change", fnValidation);
