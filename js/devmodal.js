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
