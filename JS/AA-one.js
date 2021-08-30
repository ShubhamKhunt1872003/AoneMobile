burger = document.querySelector('.burger');
navBar = document.querySelector('.nav');
ulList = document.querySelector('.ul');


burger.addEventListener('click',()=>
{
    navBar.classList.toggle('nav-resp');
    ulList.classList.toggle('ul-resp');
 
})