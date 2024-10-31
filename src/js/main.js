/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
         // We add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', ()=>{
            //La clase show-menu es añadida o eliminada (con toggle) cada vez que el botón es presionado, alternando la visibilidad del menú.
            nav.classList.toggle('show-menu')
        })
    }
}

//llama a la función y pasa el id del botón (nav-toggle) y el menú (nav-menu), activando la funcionalidad.
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

//Este código JavaScript permite que el menú de navegación se cierre automáticamente cuando el usuario hace clic en uno de los enlaces del menú. Esto es útil para mejorar la experiencia de usuario en dispositivos móviles o pantallas pequeñas.
//navLink selecciona todos los elementos con la clase .nav__link, que representa los enlaces del menú de navegación.
//document.querySelectorAll devuelve una NodeList, permitiendo trabajar con todos los enlaces en un ciclo.
const navLink = document.querySelectorAll('.nav__link')


//la función linkAction se encarga de ocultar el menú. Selecciona el menú de navegación (navMenu) por su id (nav-menu) y le elimina la clase show-menu usando classList.remove('show-menu').
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
//Agregar el Evento de Clic a Cada Enlace (forEach).Para cada enlace (n), se agrega un evento de clic que llama a linkAction.
//Esto asegura que al hacer clic en cualquier enlace de navegación, linkAction elimine la clase show-menu, cerrando el menú.
navLink.forEach(n => n.addEventListener('click', linkAction))


// Cerrar el menú si el usuario hace clic fuera de él.
//Agregamos un evento de clic en el document.
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.getElementById('nav-toggle');
    
    // Verifica que el clic no haya sido dentro del menú o del ícono del menú.
    //En este evento, verificamos si el área del clic no está dentro del menú (navMenu) ni en el ícono del menú (toggle) usando contains.
    //Si el clic es fuera de estas áreas, se elimina la clase show-menu, cerrando el menú.
    if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
        navMenu.classList.remove('show-menu');
    }
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class.
//getCurrentTheme: retorna 'dark' si body contiene la clase dark-theme, de lo contrario, retorna 'light'.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
//getCurrentIcon: retorna el icono actual dependiendo de si el botón tiene la clase iconTheme.
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    //Event Listener para alternar el tema: Cuando el usuario hace clic en el botón, el tema y el icono cambian, y la selección se guarda en localStorage.
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})