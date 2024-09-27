document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const close = document.querySelector('.close');
    const box = document.querySelector('.box');
    const overlay = document.querySelector('.overlay');
    const input = document.querySelector('.input');
    const btn2 = document.querySelector('.btn2');
    const todoInputContainer = document.querySelector('.todo-input');

    btn.addEventListener('click', function() {
        box.classList.add('active');
        overlay.classList.add('active');
    });

    close.addEventListener('click', function() {
        box.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        box.classList.remove('active');
        overlay.classList.remove('active');
    });

    btn2.addEventListener('click', function() {
        const inputValue = input.value;
        if (inputValue !== "") 
    {
            const inputDiv = document.createElement('div');
            const inputText = document.createTextNode(inputValue);
            const cross = document.querySelector('.cross')

            inputDiv.appendChild(inputText);
            inputDiv.classList.add('todo-box');
            inputDiv.setAttribute("draggable", "true");

            todoInputContainer.appendChild(inputDiv);

            // Clear the input field
            input.value = '';
            
            // Hide the modal and overlay
            box.classList.remove('active');
            overlay.classList.remove('active');


    const  createSpan = document.createElement('span')
    const span_txt = document.createTextNode("\u00D7");
 

    createSpan.appendChild(span_txt)

    createSpan.appendChild('todo-box')
   
    todoInputContainer.appendChild(createSpan)




         

    }
    });
});
