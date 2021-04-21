document.querySelector('body').insertAdjacentHTML('afterbegin', '<ul id="gallery"></ul>');
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
let gallery = document.getElementById('gallery');
let dataGallery = '';
images.forEach(value => {
    let elem = `<li class="img"><img src='${value.url}' alt='${value.alt}'></li>`
    dataGallery += elem;
    console.log(dataGallery);
});

gallery.insertAdjacentHTML("afterend", `<ul>${dataGallery}</ul>`);