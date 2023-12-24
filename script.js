const buttonMenu = document.querySelector('.menuShow');

buttonMenu.addEventListener("click", () => {
    let menuMobile = document.querySelector('.menu_mobile')
    menuMobile.classList.toggle('open');
    if(menuMobile.classList.contains('open')){
        document.querySelector('.icon_nav').src = "assets/close_menu_black.svg"
    } else{
        document.querySelector('.icon_nav').src = "assets/open_menu_black.svg"
    }
    
});