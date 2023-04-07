window.onload = function () {
    document.querySelector('.loader').classList.add('loader__active');
    window.setTimeout(function () {
    document.querySelector('.loader').classList.remove('loader__active');
    }, 1000);
  }