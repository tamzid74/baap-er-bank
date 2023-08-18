
document.getElementById('btn-submit').addEventListener('click',function(){
    
    const inputEmail = document.getElementById('email-input');
    const email = inputEmail.value;
    const inputPassword = document.getElementById('password-input');
    const password = inputPassword.value;




    if(email !== 'baaperpola@baap.com' && password !=='emon69'){
        alert('kire tor baap er bank to eita na arekjon er baap er bank er dik nojor deo ja bhag');
    }else{
        window.location.href = 'index.html';
    }
})