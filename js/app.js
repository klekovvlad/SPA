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


//Слайдер сертификатов на главной странице

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