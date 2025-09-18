
//Crear una prueba [devuelve true]
const validatorPassword = require('./passwordValidator')
test('Contraseña valida para prueba',()=>{
    expect(validatorPassword("password")).toBe(false)
})

//Crear otra prueba [devuelve false]
const passwordValidator = require('./passwordValidator')
test('Contraseña corta falla',()=>{
    expect(passwordValidator("pass1")).toBe(false)
})

