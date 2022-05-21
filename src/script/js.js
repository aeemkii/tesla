$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.header').addClass('header-fixed');
    }else{
        $('.header').removeClass('header-fixed');
    }
});


// $(document).ready(function(){
//     $(".carousel").owlCarousel({
//        items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//     });
// });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

let popupBg = document.querySelector('.popup_bg'); // Фон popup окна
let popup = document.querySelector('.popup'); //Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); //Кнопка для скрытия окна

openPopupButtons.forEach((button) => {// Перебираем все кнопки
    button.addEventListener('click', (e) => {// Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотврощаем дефолтное поведение браузера
        popupBg.classList.add('active');// Добавляем класс 'active' для фона
        popup.classList.add('active')// И для самого окна
    })
});

closePopupButton.addEventListener('click', () => {// Вешаем обработчик на крестик
    popupBg.classList.remove('active'); //Убираем активный класс с фона
    popup.classList.remove('active');// И с окна
});

document.addEventListener('click', (e) => {//Вешаем обработчик на весь документ
    if (e.target === popupBg){// Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }

});
