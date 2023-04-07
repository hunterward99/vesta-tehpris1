// Burger-menu

burgerBtn = document.querySelector('.burger-btn'),
burgerBg = document.querySelector('.burger__bg'),
headerLink = document.querySelectorAll('.header__link'),
headerMenu = document.querySelector('.header__menu');

burgerMenuListener()

function burgerMenuListener() {
    burgerBtn.addEventListener('click', () => {
        if(!burgerBtn.classList.contains('active')) {
            showBurgerMenu();
            headerLink.forEach((e) => {
                e.addEventListener('click', () => {
                    hideBurgerMenu();
                });
            });
        } else {
            hideBurgerMenu();
        }
    })
}

function showBurgerMenu() {
    burgerBg.classList.add('active');
    burgerBtn.classList.add('active');
    headerMenu.classList.add('mobile-menu');
    document.removeEventListener('scroll', fixedHeader);
    document.body.style = 'overflow: hidden';

}

function hideBurgerMenu() {
    burgerBg.classList.remove('active');
    burgerBtn.classList.remove('active');
    headerMenu.classList.remove('mobile-menu');
    document.addEventListener('scroll', fixedHeader);
    document.body.style = 'overflow: visible';
}



