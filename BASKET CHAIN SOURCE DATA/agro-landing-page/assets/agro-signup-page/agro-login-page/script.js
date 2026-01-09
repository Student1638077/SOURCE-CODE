document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Get stored user data
        const storedUser = JSON.parse(localStorage.getItem('agro_user'));

        if (storedUser && storedUser.email === email) {
            // In a real app, you'd verify the password too
            // For this simulation, we'll just check the email
            
            // Update login state
            storedUser.isLoggedIn = true;
            localStorage.setItem('agro_user', JSON.stringify(storedUser));

            alert("Login successful! Redirecting to dashboard...");
            // Redirect to dashboard (simulated)
            window.location.href = 'c:\Users\Owner\Desktop\BASKET CHAIN SOURCE DATA\agro-landing-page\assets\agro-dashboard\Dashboard.html';
        } else {
            alert("Invalid email or user not found. Please sign up first.");
        }
    });
});
