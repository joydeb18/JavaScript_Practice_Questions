const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');


inputfield.addEventListener('input', function(){
    console.log(inputfield.value);
    let password = inputfield.value;
    if (password.length <8)
    {
        outputfield.innerText="password is too short"
        outputfield.style.color="red";
    }
    else{

    }
})