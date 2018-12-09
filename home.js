const parallax = document.getElementById("form")
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    console.log('offset :' + offset);
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
})

var username = document.forms['vform']['username'];
var password = document.forms['vform']['password'];
//memilih elements yg error
var name_error = document.getElementById('name_error');
var password_error = document.getElementById('password_error');
//tanda / alert required yang muncul
username.addEventListener('blur', Nameverify, true);
password.addEventListener('blur', PasswordVerify, true);

//fungsi
function Validate() {
    if (username.value == "") {
        username.style.border = "1pxsolid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username required";
        username.focus();
        return false;
    }
    if (password.value == "") {
        password.style.border = "0px solid red";
        document.getElementById('password_div').style.color = "red";
        password_error.textContent = "Password required";
        password.focus();
        return false;
    }

}