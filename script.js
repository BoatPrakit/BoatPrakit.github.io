const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    closeBtn.classList.remove('hidden');
});
closeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})
