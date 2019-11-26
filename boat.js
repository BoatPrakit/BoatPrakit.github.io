window.onscroll = function() {
    myFunction()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function Icespike() {

    var img = document.getElementById("img");
    img.src = "../picture/snowy.png";
}

function StoneShore() {

    var img = document.getElementById("img");
    img.src = "../picture/stone.png";
}

function Mushroom() {

    var img = document.getElementById("img");
    img.src = "../picture/mushroom.jpg";
}

function desert() {

    var img = document.getElementById("img");
    img.src = "../picture/desert.png";
}

function deep() {

    var img = document.getElementById("img");
    img.src = "../picture/ocean.png";
}

function nether() {

    var img = document.getElementById("img");
    img.src = "../picture/nether.jpg";
}

function changeNav() {
    var chn = document.getElementsByClassName("ls");
    var li = document.getElementsByClassName("small");
    chn[0].innerHTML = "Mode";
    chn[0].href = "../page/mode.html";
    li[0].style.paddingLeft = "2%";
    chn[1].innerHTML = "Mod";
    chn[1].href = "../page/mod.html";
    li[1].style.paddingLeft = "6%";

    chn[2].innerHTML = "Biome";
    chn[2].href = "../page/biome.html";
    chn[3].innerHTML = "Animal";
    chn[3].href = "../page/mob.html";
    li[3].style.paddingLeft = "5%";
}

function changeNav1() {
    var chn = document.getElementsByClassName("ls");
    var li = document.getElementsByClassName("small");
    chn[0].innerHTML = "Home";
    chn[0].href = "../page/main.html";
    li[0].style.paddingLeft = "1%";
    chn[1].innerHTML = "History";
    chn[1].href = "../page/history.html";
    li[1].style.paddingLeft = "1%";

    chn[2].innerHTML = "Block";
    chn[2].href = "../page/block.html";
    chn[3].innerHTML = "version";
    chn[3].href = "../page/version.html";
    li[3].style.paddingLeft = "1.3%";
}