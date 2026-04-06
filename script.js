window.addEventListener("DOMContentLoaded", () => {
    const roleButtons = document.querySelectorAll('.role-btn');
    const registerForm = document.querySelector('#registerForm');
    const loginForm = document.querySelector('#loginForm');
    const createBtn = document.querySelector('#createAccountBtn');
    let selectedRole = 'Investor';

    // role selection
    roleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRole = button.textContent.trim();
        });
    });

    // register
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            const fullName = registerForm?.querySelector('input[type="text"]')?.value.trim();
            const email = registerForm?.querySelector('input[type="email"]')?.value.trim();
            const password = registerForm?.querySelector('input[type="password"]')?.value.trim();

            if (!fullName || !email || !password) {
                alert('Please fill in all fields');
                return;
            }

            const user = {
                fullName,
                email,
                password,
                role: selectedRole
            };

            localStorage.setItem(email, JSON.stringify(user));

            if (selectedRole === 'Investor') {
                window.location.href = 'investor.html';
            } else if (selectedRole === 'Farm Owner') {
                window.location.href = 'farmer.html';
            } else {
                window.location.href = 'admin.html';
            }
        });
    }

    // login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value.trim();

            const savedUser = JSON.parse(localStorage.getItem(email));

            if (!savedUser) {
                alert('Account not found');
                return;
            }

            if (savedUser.password !== password) {
                alert('Incorrect password');
                return;
            }

            if (savedUser.role === 'Investor') {
                window.location.href = 'investor.html';
            } else if (savedUser.role === 'Farm Owner') {
                window.location.href = 'farmer.html';
            } else {
                window.location.href = 'admin.html';
            }
        });
    }
});