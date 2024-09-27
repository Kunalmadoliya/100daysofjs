document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const showButton = document.querySelector('.btn'); // Button to show the notification box
    const notificationBox = document.querySelector('.box'); // The notification box
    const closeButton = document.querySelector('.box .header .fa-times'); // Close button inside the notification box
    const black = document.querySelector('.black')

    // Event listener for showing the notification box
    showButton.addEventListener('click', function() {
        notificationBox.classList.add('show');
        black.classList.add('active')
    });

    // Event listener for closing the notification box
    closeButton.addEventListener('click', function() {
        notificationBox.classList.remove('show');
        black.classList.remove('active')
    });
});
