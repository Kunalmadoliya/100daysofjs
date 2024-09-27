// first we have to add event listner in all the button now we have to to connect this to my active class




const btns = document.querySelectorAll("[data-target-tab]");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        btns.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        btn.classList.add('active');
        // Remove active class from all main elements
        document.querySelectorAll('.main').forEach(main => main.classList.remove('active'));
        // Add active class to the corresponding main element
        document.querySelector(btn.dataset.targetTab).classList.add('active');
    });
});
