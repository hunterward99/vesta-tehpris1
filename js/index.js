// Загрузка страницы

// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 1000);
//   }



// Фиксированная шапка
const header = document.querySelector('.header');
const headerH = document.querySelector('.header').clientHeight;

document.addEventListener('scroll', () => {
    fixedHeader();
});

function fixedHeader() {
    let scroll = window.scrollY;

    if(scroll > headerH) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
}

// Плавный скролл по якорям

const link = document.querySelectorAll('a[href*="#"]');
    
link.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = e.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        
    })
});