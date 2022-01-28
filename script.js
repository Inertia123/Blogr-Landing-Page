function toggleClass(){
    const toggle = document.querySelector('.ham-menu');
    toggle.classList.toggle('ham');
    const close = document.querySelector('.navbar');
    close.classList.toggle('visible');  
}
function dropDown1(){
    const dropdown1 = document.querySelector('#heading-one');
    dropdown1.classList.toggle('drop1');
}
function dropDown2(){
    const dropdown2 = document.querySelector('#heading-two');
    dropdown2.classList.toggle('drop2');
}
function dropDown3(){
    const dropdown3 = document.querySelector('#heading-three');
    dropdown3.classList.toggle('drop3');
}
function arrow1(){
    const rotate1 = document.querySelector('#dark-one');
    rotate1.classList.toggle('drot');
    const rotate2 = document.querySelector('#light-one');
    rotate2.classList.toggle('lrot');
}
function arrow2(){
    const rotate1 = document.querySelector('#dark-two');
    rotate1.classList.toggle('drot');
    const rotate2 = document.querySelector('#light-two');
    rotate2.classList.toggle('lrot');
}
function arrow3(){
    const rotate1 = document.querySelector('#dark-three');
    rotate1.classList.toggle('drot');
    const rotate2 = document.querySelector('#light-three');
    rotate2.classList.toggle('lrot');
}
