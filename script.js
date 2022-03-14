let menuBtn=document.querySelector('.menuBtn');
let menu=document.querySelector('.menu');
let sidenavbar=document.querySelector('.side-navbar');


// menuBtn.addEventListener('click',onclick);

sidenavbar.style.right='-250px';

menuBtn.onclick=function(){
    if(sidenavbar.style.right==='-250px'){
        sidenavbar.style.right='0';
        menu.src='close.png';
    }
    else{
        sidenavbar.style.right='-250px';
        menu.src='menu.png'

    }
}