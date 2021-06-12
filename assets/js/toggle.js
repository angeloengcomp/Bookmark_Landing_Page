const btnMobile = document.getElementById('btn-mobile');
// const features = document.getElementById('btn-features');
// const contact = document.getElementById('btn-contact');
// const pricing = document.getElementById('btn-pricing');
// const login = document.getElementById('btn-login');
const nav = document.getElementById('nav');

function toggleMenu() {
    console.log('click');
    nav.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    const elemento = e.target;
    if (elemento.classList.contains('btn-features')) {
        toggleMenu()
    }
    if (elemento.classList.contains('btn-pricing')) {
        toggleMenu()
    }
    if (elemento.classList.contains('btn-contact')) {
        toggleMenu()
    }
    if (elemento.classList.contains('btn-login')) {
        toggleMenu()
    }
});

// features.addEventListener('click', toggleMenu);
// pricing.addEventListener('click', toggleMenu);
// contact.addEventListener('click', toggleMenu);
// login.addEventListener('click', toggleMenu);

btnMobile.addEventListener('click', toggleMenu);