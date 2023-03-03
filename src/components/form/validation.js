

export default function validation(input){
  
const emailregex = /\S+@\S+\.\S+/;
const passregex = new RegExp("[0-9]");
const errors = {};
if (!emailregex.test(input.username)) {
    errors.username = "Bebe ser un email valido";
}
if (!input.username) {
    errors.username = "no puede estar vacio el campo";
}
if (input.username.length > 35) {
    errors.username = "maximo 35 caracteres";
}
if (!passregex.test(input.password)) {
    errors.password = "Bede contener al menos un numero ";
    
}
if ( input.password.length < 6 ||  input.password.length > 10) {
    errors.password = "Bede contener entre 6 y 10 caracteres ";
}

return errors;
}