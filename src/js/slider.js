const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 600,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    loop: true,
    autoHeight: false,
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
});