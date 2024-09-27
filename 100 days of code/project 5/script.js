document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            button.classList.add('active');

            const targetId = button.getAttribute('data-target-tab');

            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tabContent => {
                tabContent.classList.remove('active');
            });

            // Show the selected tab content
            const targetTab = document.querySelector(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
});
