const aboutmeBtn = document.getElementById('about-me')
const resumeBtn = document.getElementById('resume');
const projectBtn = document.getElementById('projects');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;
const links = [aboutmeBtn,resumeBtn,projectBtn];
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
    links[prevIndex].classList.remove('active');
    links[index].classList.add('active');
    prevIndex = index;
}
function showSelectedContent(index,isRemove,className){
    updateCurrentBtn(index);
    if(isRemove) body.classList.remove(className);
    else body.classList.add(className);
    if(innerWidth < 1024) {
        closeBtn.click();    
    }
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