const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.logo-nav');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
// })

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLogo.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach((item) =>
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLogo.classList.remove("active");
        navMenu.classList.remove('active');
    })
);