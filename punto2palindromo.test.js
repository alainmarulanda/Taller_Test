const esPalindromo = require('./punto2palindromo')

test('Devuelve si la palabra es un palindromo', ()=>{
    expect(esPalindromo("oso")).toBe(true)
})

test('Devuelve si la palabra no es un palindromo', ()=>{
    expect(esPalindromo("casa")).toBe(false)
})

test('Devuelve si la palabra es un palindromo aunque sea vacio', ()=>{
    expect(esPalindromo("")).toBe(true)
})

test('Devuelve si la palabra es un palindromo aunque tenga Mayusculas', ()=>{
    expect(esPalindromo("Ana")).toBe(true)
})