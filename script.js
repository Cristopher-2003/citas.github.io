let password = document.getElementById('password');
let togglePasword = document.getElementById('toggle');

let password_two = document.getElementById('password_two');
let toggle_two = document.getElementById('toggle_two');



function showHide(){
    if(password.type === "password"){
        password.setAttribute('type' , 'text');
        togglePasword.classList.add('hide');

        password_two.setAttribute('type' , 'text');
        toggle_two.classList.add('hide');

    }else{
        password.setAttribute('type' , 'password');
        togglePasword.classList.remove('hide');

        password_two.setAttribute('type' , 'password');
        toggle_two.classList.remove('hide');
   
    }
}