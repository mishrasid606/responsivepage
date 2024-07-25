// Function to handle sign-up button click
function signUp() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (email) {
        // Placeholder logic for sign-up functionality
        message.textContent = `Thank you for signing up, ${email}!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
}

// Optional: Add logic to toggle the hamburger menu here
document.querySelector('.hamburger').addEventListener('click', () => {
    alert('Hamburger menu clicked! Add menu functionality here.');
});
