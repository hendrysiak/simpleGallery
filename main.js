const images = [...document.querySelectorAll('.image-small')];

const burgerMenu = document.querySelector('.burger_menu');
const menu = document.querySelector('.right');
const presentation = document.querySelector('.image-big');
const title = document.querySelector('.change');

function openMenu() {
    menu.classList.toggle('active')
    if (menu.classList.contains('active')) {
        burgerMenu.textContent = 'X'
    } else {
        burgerMenu.textContent = '+'
    }
}

function changeImage(e) {
    images.forEach(image => {
        if (image.classList.contains('active')) {
            image.classList.remove('active')
        }
    })
    console.log(e.target)
    presentation.innerHTML = '';
    title.textContent = '';
    title.textContent = e.target.alt;
    e.target.classList.add('active');
    presentation.innerHTML = '';
    let image = document.createElement("img");
    image.src = e.target.src;
    image.alt = e.target.alt;
    image.classList.add('image-great');

    presentation.appendChild(image);

}

burgerMenu.addEventListener('click', openMenu)
images.forEach(image => image.addEventListener('click', changeImage))