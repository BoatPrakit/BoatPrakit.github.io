const aboutmeBtn = document.getElementById('about-me')
const resumeBtn = document.getElementById('resume');
const projectBtn = document.getElementById('projects');
const closeBtn = document.querySelector('.close-btn');
const mainPage = document.getElementById('main-page');
const resumePage = document.getElementById('resume-page');
const projectsPage = document.getElementById('projects-page');
const body = document.body;
const linkBtns = [aboutmeBtn,resumeBtn,projectBtn];
const pages = [mainPage,resumePage,projectsPage];
const currentBtn = [true,false,false];
let prevIndex = 0;
function burger(){
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        closeBtn.classList.remove('hidden');
    });
    closeBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    })
}
function updateCurrentBtn(index){
    if(prevIndex == index) return;
    currentBtn[prevIndex] = false;
    currentBtn[index] = true;
    linkBtns[prevIndex].classList.remove('active');
    pages[prevIndex].classList.add('hidden');
    pages[prevIndex].classList.add('xl:hidden');
    pages[prevIndex].classList.remove('animationFadeIn');
    linkBtns[index].classList.add('active');
    pages[index].classList.remove('hidden');
    pages[index].classList.remove('xl:hidden');
    pages[index].classList.add('xl:flex');
    prevIndex = index;
}
function showSelectedContent(index,isRemove,className){
    setTimeout(() => {
        updateCurrentBtn(index);
        if(isRemove) body.classList.remove(className);
        else {
            body.classList.add(className);
        }
        if(innerWidth < 1024) {
            closeBtn.click();    
        }
        pages[index].classList.add('animationFadeIn');
    },200);
}
function run(){
    burger();
    aboutmeBtn.addEventListener('click', () => {
        showSelectedContent(0,true, 'full-bg');
    })
    resumeBtn.addEventListener('click', () => {
        showSelectedContent(1,false, 'full-bg');
    });
    projectBtn.addEventListener('click', () => {
        showSelectedContent(2,false, 'full-bg');
    });
}

run();