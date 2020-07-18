(()=>{
    
    function onScroll(){
        const boat = document.querySelector('.boat');
        const pond = document.querySelector('.pond');

        boat.style.left = `${window.scrollY * 0.072}vw`;
        pond.style.right = `${window.scrollY * 0.06}%`;
    }
    function run(){
        document.addEventListener('scroll',onScroll);
    }
    run();
})();