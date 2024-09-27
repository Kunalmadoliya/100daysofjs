document.querySelectorAll('.dropdown').forEach(items =>{

    items.addEventListener('click' , function(){

        const dropdownInner = document.querySelector('.dropdown-inner')


        if(dropdownInner){

            dropdownInner.classList.toggle('active')
        }
    })
})