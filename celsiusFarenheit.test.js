const celsiusToFahrenheit = require('./celsiusFarenheit')

test('Devuelve la respuesta correcta', ()=>{
    expect(celsiusToFahrenheit(0)).toBe(32)
})

test('Devuelve la respuesta correcta', ()=>{
    expect(celsiusToFahrenheit(100)).toBe(212)
})

test('Devuelve la respuesta correcta', ()=>{
    expect(celsiusToFahrenheit(-40)).toBe(-40)
})

test('Lanza error si llega un valor vacio', ()=> {
    expect(()=> celsiusToFahrenheit("")).toThrow("El valor de entrada no debe ser vacio")
})

