const body = document.querySelector('body');

//Burger Menu

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
        if(photosSlider.classList.contains('photos-top')) {
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
                },
                navigation: {
                    prevEl: '.slider-photo-prev',
                    nextEl: '.slider-photo-next'
                }
            })
        }
    })
}

//Базовый слайдер

const sliderWrapper = document.querySelector('.slider-wrapper');
if(sliderWrapper) {
    const sliderSwiper = new Swiper(sliderWrapper, {
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

//Поле для ввода количества

const quantityInputs = document.querySelectorAll('.input-item__quantity');

if(quantityInputs.length > 0) {
    quantityInputs.forEach(inputWrapper => {
        const input = inputWrapper.querySelector('.input')
        const buttonMinus = inputWrapper.querySelector('button[data-action=minus]')
        if(input.value === 0) {
            buttonMinus.classList.add('disabled')
        }
        inputWrapper.onclick = (e) => {
            if(e.target === buttonMinus) {
                if(Number(input.value) > 0) {
                    input.value = Number(input.value - 1)
                }
                if(input.value == 0) {
                    buttonMinus.classList.add('disabled')
                }
            }
            if(e.target.dataset.action === 'plus') {
                input.value = Number(input.value) + 1;
                buttonMinus.classList.remove('disabled')
            }
        }
    })
}

//Я.Карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [61.255872, 73.396141],
            zoom: 15,
            controls: []
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([61.260481, 73.398216], {
            hintContent: 'Г. СУРГУТ, УЛ. ПРОСПЕКТ МИРА, 25',
            balloonContent: 'Spa Park'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map.svg',
            // Размеры метки.
            iconImageSize: [43, 43],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -20]
        })

    myMap.geoObjects.add(myPlacemark)
});

//Маска для телефона
const phones = document.querySelectorAll('input[type=tel]');
phones.forEach(phone => {
    IMask(phone, {
        mask: '+{7}(000)000-00-00'
    })
})

//Валидация форм

const forms = document.querySelectorAll('form');
const errors = {
    fill: 'Пожалуйста, заполните это поле',
    novalid: 'Заполните поле корректно'
}

const regs = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
}

const messages = {
    success: {
        title: 'Спасибо',
        message: 'Мы скоро свяжемся с вами'
    },
    error: {
        title: 'Ошибка',
        message: 'Попробуйте отправить форму еще раз'
    }
}

if(forms.length > 0) {
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[name=name]');
            const phone = form.querySelector('input[type=tel]');
            const privacy = form.querySelector('input#privacy');
            const email = form.querySelector('input[type=email]');

            if(name) {
                if(name.value.length < 2) {
                    addInputError(name, errors.fill)
                    
                }else if(name.value.length > 30) {
                    addInputError(name, errors.novalid)
                }
                removeInputError(name);
            }
            if(phone) {
                if(phone.value.length < 16) {
                    addInputError(phone, errors.fill)
                }
                removeInputError(phone)
            }
            if(privacy) {
                if(!privacy.checked) {
                    addInputError(privacy, errors.fill)
                }
                removeInputError(privacy)
            }
            if(email) {
                if(!regs.email.test(email.value)) {
                    addInputError(email, errors.novalid)
                }
                removeInputError(email);
            }

            if(phone.value.length >= 16 && name.value.length >= 2) {
                if(privacy && email) {
                    if(privacy.checked && regs.email.test(email.value)) {
                        sendForm(form)
                    }
                }else if(privacy) {
                    if(privacy.checked) {
                        sendForm(form)
                    }
                }else if(email) {
                    if(regs.email.test(email.value)) {
                        sendForm(form)
                    }
                }else {
                    sendForm(form)
                }
            }
        })
    })
}

const addInputError = (target, error) => {
    target.parentElement.classList.add('input-item__error');
    target.parentElement.dataset.error = error;
}

const removeInputError = (target) => {
    target.oninput = () => {
        if(target.parentElement.classList.contains('input-item__error')) {
            target.parentElement.classList.remove('input-item__error')
        }
    }
}

const sendForm = (form) => {
    fetch('/send.php', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(res => res.json())
    .then(res => {
        let message = {}
        if(res.error === false) {
            message = messages.success
        }else {
            message = messages.error
        }
        const popup = document.createElement('div');
        popup.className = 'popup popup-message';
        const popupMessage = `
            <div class="popup-body">
                <button class="popup-close"></button>
                <h3 class="popup-title">${message.title}</h3>
                <p class="popup-desc">${message.message}</p>
            </div>
        `
        popup.insertAdjacentHTML('afterbegin', popupMessage);
        body.append(popup)
        setTimeout(() => {
            popup.classList.add('open')
        }, 100)
        popupClose(popup)
    })
}

const popupClose = (popup) => {
    popup.onclick = (e) => {
        if(e.target === popup || e.target.classList.contains('popup-close')) {
            popup.classList.remove('open')
            if(popup.classList.contains('popup-message') || popup.classList.contains('popup-video')) {
                setTimeout(() => {
                    popup.parentElement.removeChild(popup)
                }, 100)
            }
        }
    }
}

//Видео поп-ап

const videoFeedbacks = document.querySelectorAll('.feedback-video-item')

if(videoFeedbacks.length > 0) {
    videoFeedbacks.forEach(video => {
        video.onclick = (e) => {
            const popup = document.createElement('div');
            popup.className = 'popup popup-video'
            const popupBody = `
            <div class="popup-body">
                <button class="popup-close"></button>
                <iframe src="${video.dataset.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            `
            popup.insertAdjacentHTML('afterbegin', popupBody);
            body.append(popup)
            setTimeout(() => {
                popup.classList.add('open')
            }, 100)
            popupClose(popup)
        }
    })
}

//Поп-ап записаться
const registerButtons = document.querySelectorAll('.popup-register-button')
if(registerButtons.length > 0) {
    const popup = document.querySelector('.popup-register')
    if(popup) {
        registerButtons.forEach(button => {
            button.onclick = () => {
                popup.classList.add('open')
                popupClose(popup)
            }
        })
    }
}

//Поп-ап сервиса

const serviceItems = document.querySelectorAll('.services-item');
const servicePopup = document.querySelector('.popup-more')

serviceItems.forEach(service => {
    service.onclick = (e) => {
        if(e.target.classList.contains('button-card')) {
            e.preventDefault();
            servicePopup.querySelector('.popup-title').textContent = service.querySelector('.services-item-title').textContent
            servicePopup.querySelector('.popup-desc').textContent = service.querySelector('.services-item-desc') ? service.querySelector('.services-item-desc').textContent : ''
            servicePopup.querySelector('.popup-img').src = service.querySelector('.services-item-img > img').src
            servicePopup.querySelector('.popup-text-time').innerHTML = service.querySelector('.services-item-time').innerHTML
            servicePopup.querySelector('.popup-text-price').innerHTML = service.querySelector('.services-item-price').innerHTML
            servicePopup.classList.add('open')
            popupClose(servicePopup); 
        }
    }
})

//Dropdown input
const formCert = document.querySelector('.form-cert');

const dropdownInputs = document.querySelectorAll('.input-item__dropdown')

if(dropdownInputs.length > 0) {
    dropdownInputs.forEach(dropdown => {
        const input = dropdown.querySelector('.input');

        input.oninput = () => input.value = ''

        dropdown.onclick = (e) => {
            if(dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            }else{
                dropdown.classList.add('open');
            }

            if(e.target.classList.contains('dropdown-item')) {
                input.value = e.target.textContent
            }
        }
    })
}

const certButtons = document.querySelectorAll('.popup-cert-button');
if(certButtons.length > 0) {
    const popupCert = document.querySelector('.popup-cert')
    certButtons.forEach(button => {
        button.onclick = (e) => {
            popupCert.classList.add('open')
            popupClose(popupCert);
        }
    })
}

if(formCert) {
    const popupCert = document.querySelector('.popup-cert')
    const popupSumm = formCert.querySelector('input.input')

    formCert.onclick = (e) => {
        if(e.target.classList.contains('button')) {
            if(popupCert) {
                popupCert.classList.add('open')
                const summInputs = document.querySelectorAll('input[name=summ]')
                if(summInputs.length > 0) {
                    summInputs.forEach(input => {
                        if(input.value == popupSumm.value) {
                            input.checked = true;
                        }
                    })
                }
                popupClose(popupCert);
            }
        }

    }
}

//Цены и услуги

const pricesWrapper = document.querySelector('.prices-wrapper');
if(pricesWrapper) {
    const items = document.querySelectorAll('.prices-list-item')
    const cartForm = document.querySelector('.addcart');
    
    if(items.length > 0) {
        cartForm.querySelector('.addcart-title').textContent = items[0].querySelector('.prices-item-title').textContent;
        cartForm.querySelector('.addcart-desc').textContent = items[0].querySelector('.prices-item-desc').textContent;
        cartForm.querySelector('.time-value').textContent = items[0].querySelector('.time-value').textContent;
        cartForm.querySelector('.summ-value').textContent = items[0].querySelector('.summ-value').textContent;
        cartForm.querySelector('.addcart-summary-price > .value').textContent = `${Number(items[0].querySelector('.summ-value').textContent.replace('₽', '').replace(' ', '')) * Number(cartForm.querySelector('.input-quantity').value)} ₽`

        items.forEach(item => {
            
            item.onclick = () => {
                cartForm.querySelector('.addcart-title').textContent = item.querySelector('.prices-item-title').textContent;
                cartForm.querySelector('.addcart-desc').textContent = item.querySelector('.prices-item-desc').textContent;
                cartForm.querySelector('.time-value').textContent = item.querySelector('.time-value').textContent;
                cartForm.querySelector('.summ-value').textContent = item.querySelector('.summ-value').textContent;
                cartForm.querySelector('.addcart-summary-price > .value').textContent = `${Number(item.querySelector('.summ-value').textContent.replace('₽', '').replace(' ', '')) * Number(cartForm.querySelector('.input-quantity').value)} ₽`
            } 
        })

        cartForm.querySelector('.input-quantity').parentElement.addEventListener('click', (e) => {
            cartForm.querySelector('.addcart-summary-price > .value').textContent = `${Number(cartForm.querySelector('.summ-value').textContent.replace('₽', '').replace(' ', '')) * Number(cartForm.querySelector('.input-quantity').value)} ₽`
        })
    }

}