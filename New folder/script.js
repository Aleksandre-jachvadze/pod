document.getElementById('email-button').addEventListener('click', () => {
    const emailInput = document.getElementById('email-input');
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "";
    }
});
const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    ;
    return emailPattern.test(email);
};
