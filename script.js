let password = document.getElementById('password');
let togglePasword = document.getElementById('toggle');

let conf_password = document.getElementById('conf_password');
let conf_togglePasword = document.getElementById('toggle');

function showHide(){
    if(password.type === "password"){
        password.setAttribute('type' , 'text');
        togglePasword.classList.add('hide');
    }else{
        password.setAttribute('type' , 'password');
        togglePasword.classList.remove('hide');
    }
}