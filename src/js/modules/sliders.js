import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

const heroBg = new Swiper('.hero-bg', {
    modules: [Autoplay, Navigation, Pagination],

    direction: 'vertical',
    speed: 1000,
    allowTouchMove: false,

    autoplay: {
        delay: 10000
    },

    pagination: {
        el: '.hero-controls__pagination'
    },

    navigation: {
        nextEl: '.hero-controls__button-next',
        prevEl: '.hero-controls__button-prev'
    }
});

const destinations = new Swiper('.destinations-slider', {
    modules: [Navigation],

    spaceBetween: 32,
    speed: 800,

    breakpoints: {
        1921: {
            slidesPerView: 4
        },
        1440: {
            slidesPerView: 3.35
        },

        1150: {
            slidesPerView: 2.8
        },
        860: {
            slidesPerView: 2.2
        },
        200: {
            slidesPerView: 1
        }
    },

    navigation: {
        nextEl: '.slider-buttons__next',
        prevEl: '.slider-buttons__prev'
    }
});

const offer = new Swiper('.offer-slider', {
    modules: [Navigation],

    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,

    breakpoints: {
        992: {
            slidesPerView: 3
        },

        200: {
            slidesPerView: 1
        }
    },

    navigation: {
        nextEl: '.slider-buttons__next',
        prevEl: '.slider-buttons__prev'
    }
});

const planners = new Swiper('.planners-slider', {
    modules: [Navigation],

    spaceBetween: 32,
    speed: 800,

    breakpoints: {
        1921: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 3.8
        },

        1300: {
            slidesPerView: 2.8
        },
        1100: {
            slidesPerView: 2.3
        },
        992: {
            slidesPerView: 1.8,
            direction: 'horizontal',
            autoHeight: false
        },
        200: {
            direction: 'vertical',
            spaceBetween: 40,
            slidesPerView: 4,
            autoHeight: true
        }
    }
});

const gallery = new Swiper('.gallery-slider', {
    modules: [Navigation],

    spaceBetween: 32,
    speed: 800,

    breakpoints: {
        992: {
            slidesPerView: 4
        },

        768: {
            slidesPerView: 3,
            direction: 'horizontal'
        },
        200: {
            direction: 'vertical',
            slidesPerView: 4
        }
    },

    navigation: {
        nextEl: '.slider-buttons__next',
        prevEl: '.slider-buttons__prev'
    }
});

const testimonial = new Swiper('.testimonial-slider', {
    modules: [Navigation],

    spaceBetween: 32,
    speed: 800,

    breakpoints: {
        1440: {
            slidesPerView: 2.5
        },

        1150: {
            slidesPerView: 2.4
        },
        992: {
            slidesPerView: 2.2
        },
        680: {
            slidesPerView: 1.5
        }
    },

    navigation: {
        nextEl: '.slider-buttons__next',
        prevEl: '.slider-buttons__prev'
    }
});
