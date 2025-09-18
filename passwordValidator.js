//Funcion para prueba
function validatorPassword(password){

    if(password.length < 8) return false
    if(!/[A-Z]/.test(password)) return false //si la contraseña no tiene minusculas
    if(!/[0-9]/.test(password)) return false //si la contraseña no tiene números
    return true

}
module.exports = validatorPassword