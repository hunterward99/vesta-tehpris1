// Loader

// window.onload = function () {
//     document.querySelector('.loader').classList.add('loader__active');
//     window.setTimeout(function () {
//     document.querySelector('.loader').classList.remove('loader__active');
//     }, 1000);
//   }

document.addEventListener('DOMContentLoaded', () => {

    // Loader

    // document.querySelector('.loader').classList.remove('loader__active');
    // function globalTimer() {document.querySelector('.loader').classList.remove('loader__active');} 

    // setTimeout(globalTimer, 1500);

    // Уведомление о разработке

    const temp = document.querySelector('.temp');
    const tempBtn = document.querySelector('.temp__btn');

    showTemp();

    function showTemp() {
        temp.style.display = 'block';
        document.body.style = 'overflow: hidden';
        tempBtn.addEventListener('click', () => {
            hideTemp();
        });
    }

    function hideTemp() {
        temp.style.display = 'none';
        temp.style.opacity = 0;
        document.body.style = 'overflow: visible';
    }



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
        document.querySelector('.header__logo').style.display = 'none';
        headerMenu.style.cssText = 'padding-left: 40px; margin: 0 auto';
    }

    function hideBurgerMenu() {
        burgerBg.classList.remove('active');
        burgerBtn.classList.remove('active');
        headerMenu.classList.remove('mobile-menu');
        document.addEventListener('scroll', fixedHeader);
        document.body.style = 'overflow: visible';
        document.querySelector('.header__logo').style.display = 'block';
        headerMenu.style.cssText = 'padding: 0; margin: 0';
    }



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


    // Модальное окно
    const callback = document.querySelector('.callback'),
          modal = document.querySelector('.modal'),
          modalBg = document.querySelector('.modal__bg'),
          modalClose = document.querySelector('.modal__close');
    
    callback.addEventListener('click', () => {
        showModal();

        document.addEventListener('click', (e) => {
        if(e.target == modalClose || e.target == modalBg){
            hideModal();
        }
       });
    });

    function showModal() {
        modal.style.display = 'block';
        callback.style.display = 'none';
    }
    function hideModal() {
        modal.style.display = 'none';
        callback.style.display = 'block';
    }

    
        //2. Получить элемент, к которому необходимо добавить маску
        $("#number").mask("7(999) 999-9999");
});
