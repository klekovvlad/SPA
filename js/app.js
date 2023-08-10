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