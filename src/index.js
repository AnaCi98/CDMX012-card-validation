import validator from './validator.js';
let algoritmoLuhn = 0;
let hideCardNumber = "";
let creditCardNumber = document.getElementById("entrada");
document.getElementById("valida").addEventListener("click", CardNumber);
function CardNumber() {
algoritmoLuhn = validator.isValid(creditCardNumber.value);
hideCardNumber = validator.maskify(creditCardNumber.value);
document.getElementById("entrada").value = hideCardNumber;
if(algoritmoLuhn==true){
    document.getElementById("resultado").innerText = "Tu tarjeta se ha registrado correctamente"; 
    document.getElementById("resultado").style.color = "green";   
}   
else{
    document.getElementById("resultado").innerText = "Tu tarjeta no es válida, ingresa otra tarjeta"; 
    document.getElementById("resultado").style.color = "red";   
}
}

//console.log(validator);