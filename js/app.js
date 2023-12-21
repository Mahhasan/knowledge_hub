var swiper = new Swiper(".mySwiper", {
    speed: 1000, // Set the speed of the slider animation (in milliseconds)
    effect: "slide", // Choose the transition effect ("slide", "fade", "cube", "coverflow", "flip")
    loop: true, // Enable continuous loop
    autoplay: {
        delay: 8000, // Set the delay between slides (in milliseconds)
        disableOnInteraction: false, // Allow manual navigation even when autoplay is enabled
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});