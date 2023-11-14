const move = document.querySelector('.move')
const moveE = document.querySelector('.moveE')
const formA = document.querySelector('.formA')
const fundo = document.querySelector('.fundo')
const fundoB = document.querySelector('.fundoB')
const formB = document.querySelector('.formB')
const cape = document.querySelector('.orange-cape')


move.addEventListener('click',()=>{
    formA.style.transform = 'translateX(0)';
    formB.style.transform = 'translateX(-50%)';
    cape.style.transform = 'translateX(100%)';
    cape.style.borderRadius = '0 12px 12px 0';
    fundo.style.transform = 'translateX(-180%)';
    fundoB.style.transform = 'translateX(0)';
})

moveE.addEventListener('click',()=>{
    formA.style.transform = 'translateX(50%)';
    formB.style.transform = 'translateX(0)';
    cape.style.transform = 'translateX(0)';
    cape.style.borderRadius = '12px 0 0 12px';
    fundo.style.transform = 'translateX(0)';
    fundoB.style.transform = 'translateX(180%)';
})

