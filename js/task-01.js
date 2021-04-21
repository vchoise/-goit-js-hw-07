let base = `<ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>

    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>`
document.querySelector('body').insertAdjacentHTML('afterbegin', base);
let categories = document.getElementsByClassName('item');
console.log(`В списке ${categories.length} категории`);
for (let element of categories) {
    console.log(`Категория: ${element.childNodes[1].innerText}`);
    console.log(`Количество элементов: ${element.childNodes[3].childElementCount}`);
}