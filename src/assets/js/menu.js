document.addEventListener("DOMContentLoaded",function () {
    var btnNav = document.querySelector('.navbar-custom-icon');
    var navBar = document.querySelector('.navbar-custom');
    var sideBar = document.querySelector('.sidebar');
    var main = document.querySelector('#main');

    //click button
    btnNav.onclick = function(){
        sideBar.classList.toggle('no-active-side-bar');
        main.classList.toggle('main-active');
        main.classList.toggle('main-padding');
        navBar.classList.toggle('active-nav-bar');
    }
},false);
