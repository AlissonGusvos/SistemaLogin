document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const user = formData.get('user');
    const password = formData.get('password');

    const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user,password })
    });

    const result = await response.json();
    
    //  LANÇA O ALERTBOX
    if (result.success == false) {
       //alert(result.error);
       const alertBox = document.getElementById('message-box');
       const messageText = document.createElement('p');
       messageText.textContent = result.error;
       alertBox.appendChild(messageText);
       alertBox.style.display = "flex";
       requestAnimationFrame(()=>{
        alertBox.style.opacity = 1;
       })
       
    }
    if (result.success == true) {
        window.location.href = result.redirect;
    }
    
})