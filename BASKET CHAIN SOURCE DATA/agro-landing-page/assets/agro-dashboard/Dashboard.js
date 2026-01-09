document.addEventListener('DOMContentLoaded', () => {
    // Mock user data - this would normally come from an API or local storage
    const userData = {
        fullName: "Richmond Henshaw",
        profilePicture: null // Set to a URL string if an image exists
    };

    updateUserProfile(userData);
});

/**
 * Updates the user profile information on the dashboard
 * @param {Object} user - The user data object
 */
function updateUserProfile(user) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userInitials = document.getElementById('userInitials');
    const userProfile = document.getElementById('userProfile');

    if (!user) return;

    // Update Welcome Message
    // Extract first name for the welcome message
    const firstName = user.fullName.split(' ')[0];
    welcomeMessage.textContent = `Welcome back, ${firstName}!`;

    // Update Profile Picture or Initials
    if (user.profilePicture) {
        // If user has a profile picture, display it
        userProfile.innerHTML = `<img src="${user.profilePicture}" alt="${user.fullName}">`;
    } else {
        // If no profile picture, display initials
        const initials = getInitials(user.fullName);
        userInitials.textContent = initials;
    }
}

/**
 * Extracts initials from a full name
 * @param {string} name - The full name
 * @returns {string} - The initials (e.g., "Richmond Henshaw" -> "RH")
 */
function getInitials(name) {
    if (!name) return "";
    
    const parts = name.split(' ');
    let initials = "";
    
    // Get the first letter of the first two name parts
    for (let i = 0; i < Math.min(parts.length, 2); i++) {
        if (parts[i].length > 0) {
            initials += parts[i][0].toUpperCase();
        }
    }
    
    return initials;
}

// Example of how to change the user dynamically (for testing)
// window.changeUser = (newName) => {
//     updateUserProfile({ fullName: newName, profilePicture: null });
// };


document.addEventListener('DOMContentLoaded', () => {
    // Get user data from localStorage (from the signup page)
    const userData = JSON.parse(localStorage.getItem('agro_user'));

    const welcomeMessage = document.getElementById('welcomeMessage');
    const userInitials = document.getElementById('userInitials');

    if (userData && userData.fullName) {
        // Update Welcome Message
        // Extract first name for the "Richie" style greeting
        const firstName = userData.fullName.split(' ')[0];
        welcomeMessage.innerText = `Welcome back, ${firstName}!`;

        // Update Initials
        const names = userData.fullName.split(' ');
        let initials = '';
        if (names.length >= 2) {
            initials = names[0][0] + names[1][0];
        } else {
            initials = names[0][0] + (names[0][1] || '');
        }
        userInitials.innerText = initials.toUpperCase();
    } else {
        // Default values if no user data is found
        welcomeMessage.innerText = "Welcome back, Richie!";
        userInitials.innerText = "RH";
    }

    // Sidebar navigation interaction
    const sidebarIcons = document.querySelectorAll('.icon-item');
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            sidebarIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    });

    // Wishlist toggle
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            icon.style.color = icon.classList.contains('fas') ? '#e74c3c' : '#666';
        });
    });

    // Logout simulation
    const logoutBtn = document.querySelector('.logout-icon');
    logoutBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to logout?")) {
            const userData = JSON.parse(localStorage.getItem('agro_user'));
            if (userData) {
                userData.isLoggedIn = false;
                localStorage.setItem('agro_user', JSON.stringify(userData));
            }
            alert("Logged out successfully!");
            window.location.href = '../agro-signup.html';
        }
    });
});
