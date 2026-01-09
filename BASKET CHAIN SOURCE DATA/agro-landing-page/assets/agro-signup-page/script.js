document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    // Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation: Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            confirmPassword.style.borderColor = 'var(--error-color)';
            return;
        }

        // Simulated Authentication Flow
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            location: document.getElementById('location').value,
            password: password.value
        };

        console.log("Simulating account creation with data:", formData);

        // Show loading state on button
        const submitBtn = signupForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Creating Account...";
        submitBtn.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            // Store user data in localStorage (Simulated DB)
            localStorage.setItem('agro_user', JSON.stringify({
                email: formData.email,
                fullName: formData.fullName,
                isLoggedIn: true
            }));

            // Show success modal
            successModal.style.display = 'flex';
            
            // Reset button
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            signupForm.reset();
        }, 1500);
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
        // Redirect to home or dashboard (simulated)
        window.location.href = 'c:\Users\Owner\Desktop\BASKET CHAIN SOURCE DATA\agro-landing-page\assets\agro-dashboard\Dashboard.html'; 
    });

    // Real-time password matching feedback
    confirmPassword.addEventListener('input', () => {
        if (confirmPassword.value === password.value) {
            confirmPassword.style.borderColor = 'var(--primary-color)';
        } else {
            confirmPassword.style.borderColor = 'var(--error-color)';
        }
    });
});
