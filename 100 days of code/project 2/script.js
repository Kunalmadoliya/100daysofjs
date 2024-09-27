


const boxes = document.querySelectorAll('.main');

        boxes.forEach(box => {
            box.querySelector('.question').addEventListener('click', function() {
                box.classList.toggle('active');
            });
        });