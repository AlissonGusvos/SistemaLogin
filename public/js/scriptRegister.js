document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const user = formData.get('user');
    const password = formData.get('password');
    const email = formData.get('email');

    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user,password,email })
    });

    const result = await response.json();
    
    //  LANÇA O ALERTBOX

if (result.success === false) {
    const alertBox = document.getElementById('message-box');
    const textAlert = document.getElementById('text-alert');
    textAlert.textContent = result.error;
    alertBox.style.display = "flex";
    requestAnimationFrame(() => {
        alertBox.style.opacity = 1;
    });
    setTimeout(() => {
        requestAnimationFrame(() => {
            alertBox.style.opacity = 0;
        });
    }, 5000);
} 
if (result.success === true) {
    window.location.href = result.redirect;
}

    
})