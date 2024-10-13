
var swiper = new Swiper(".HSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        '620': {
            slidesPerView: 3,
        },
        '820': {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".cardSwiper", {
    spaceBetween: 5,
    loop: true,
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});