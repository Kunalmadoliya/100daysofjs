const openNav = document.querySelector('.btn')
const closeNav = document.querySelector('.btn1')
const nav = document.querySelector('.nav')


openNav.addEventListener('click' , function(){

 nav.classList.add('active')
})

closeNav.addEventListener('click' ,function(){

    nav.classList.remove('active')
})