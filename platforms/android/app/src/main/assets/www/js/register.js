// Name and Password from the register-form
var email = document.getElementById('email');
var confEmail = document.getElementById('confEmail');
var pass = document.getElementById('pass');
var terms = document.getElementById('terms');

// storing input from register-form
function store() {
    if (email.value===""||confEmail.value===""||pass.value==="") {
        alert("Por favor llene todos los campos");
        return;
    } else if (!terms.checked) {
        alert("Debe aceptar términos y condiciones");
        return;
    } else if (email.value!==confEmail.value) {
        alert("Los correos deben ser iguales");
        return;
    }
    localStorage.setItem('email', email.value);
    localStorage.setItem('pass', pass.value);
    window.location.assign('signupsucc.html');
}
