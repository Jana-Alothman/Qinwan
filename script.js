window.addEventListener("DOMContentLoaded", () => {
    const roleButtons = document.querySelectorAll('.role-btn');
    const registerForm = document.querySelector('#registerForm');
    let selectedRole = 'Investor';

    roleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRole = button.textContent.trim();
        });
    });

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (selectedRole === 'Investor') {
                window.location.href = 'investor.html';
            } else if (selectedRole === 'Farm Owner') {
                window.location.href = 'farmer.html';
            } else if (selectedRole === 'Admin') {
                window.location.href = 'admin.html';
            }
        });
    }
});