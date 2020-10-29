function check() {
    console.log(window.location.href)

    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedPass = localStorage.getItem('pass');

    // entered data from the login-form
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');

    // check if stored data from register-form is equal to data from login form
    if(email.value !== storedEmail || pass.value !== storedPass) {
        alert('Correo o contraseña incorrectos');
    }else {
        window.location.assign('home.html');
    }
}