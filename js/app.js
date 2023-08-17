//Burger Menu

if(window.innerWidth < 768) {
    const headerMobile = document.querySelector('.header-mobile');

    if(headerMobile) {

        headerMobile.addEventListener('click', (e) => {
            if(e.target.classList.contains('header-burger-button')) {
                headerMobile.classList.contains('open') ? headerMobile.classList.remove('open') : headerMobile.classList.add('open');
            }
            if(e.target.classList.contains('menu-item__haschildren') || e.target.parentElement.classList.contains('menu-item__haschildren')) {
                e.preventDefault();
                e.target.parentElement.classList.contains('open') ? e.target.parentElement.classList.remove('open') : e.target.parentElement.classList.add('open')
            }
        })

    }
}

// window.onclick = (e) => console.log(e.target)


//Слайдер баннеров на главной странице

const SurtificateSlider = document.querySelector('.surtificate-slider');

if(SurtificateSlider) {
    const SurtificateSwiper = new Swiper(SurtificateSlider, {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        pagination: {
            el: '.surtificate-pagination',
            clickable: true,
        },
    })
}

//Слайдер сертификатов

const GiftsSlider = document.querySelector('.gifts-slider');

if(GiftsSlider) {
    const GiftsSwiper = new Swiper(GiftsSlider, {
        slidesPerView: 'auto',
        centeredSlides: true, 
        initialSlide: 1,
        breakpoints: {
            0: {
                spaceBetween: 20,
                initialSlide: 0,
            },
            768: {
                spaceBetween: 80,
                initialSlide: 1,
            }
        },
        on: {
            init: function() {
                if(window.innerWidth >= 768) {
                    if(this.slides.length <= 3) {
                        this.disable()
                    }
                }
            }
        },

    })
}

//Слайдер галереи

const PhotosSliders = document.querySelectorAll('.photos-slider');

if(PhotosSliders.length > 0) {
    PhotosSliders.forEach((photosSlider, index) => {
        if(index === 0) {
            const photosSwiper = new Swiper(photosSlider, {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                breakpoints: {
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1.2,
                        centeredSlides: true,
                    },
                    768: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        centeredSlides: false,
                    }
                }
            })
        }else {
            const photosSwiper = new Swiper(photosSlider, {
                spaceBetween: 30,
                slidesPerView: 5,
                loop: true,
                breakpoints: {
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1.9,
                        centeredSlides: true,
                    },
                    768: {
                        spaceBetween: 30,
                        slidesPerView: 5,
                        centeredSlides: false,
                    }
                }
            })
        }
    })
}

//Слайдер отзывов
//Слайдер отзывов / Видео

const feedbackVideoSlider = document.querySelector('.feedback-video');

if(feedbackVideoSlider) {
    const feedbackVideoSwiper = new Swiper(feedbackVideoSlider, {
        navigation: {
            prevEl: '.slider-button-prev',
            nextEl: '.slider-button-next'
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })
}

//Слайдер отзывов / Комментарии

const feedbackCommentSlider = document.querySelector('.feedback-comments');

if(feedbackCommentSlider) {
    const feedbackCommentSwiper = new Swiper(feedbackCommentSlider, {
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        navigation: {
            prevEl: '.slider-button-prev',
            nextEl: '.slider-button-next'
        }
    })
}


//Список категорий для услуг в адаптиве

const servicesList = document.querySelector('.services-list');

if(servicesList) {
    const servicesListItems = servicesList.querySelectorAll('.services-list-item');
    servicesList.addEventListener('click', (e) => {
        servicesList.classList.contains('open') ? servicesList.classList.remove('open') : servicesList.classList.add('open')
        if(e.target.classList.contains('services-button')) {
            for(let i = 0; i < servicesListItems.length; i++) {
                servicesListItems[i].classList.remove('active')
            }
            e.target.parentElement.classList.add('active')
        }
    })
}