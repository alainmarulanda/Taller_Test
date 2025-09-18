const contarVocales = require('./vocales');

describe('Contar Vocales', () => {
  // Caso de prueba 1: "hola" debe tener 2 vocales
  test('debe devolver 2 para la palabra "hola"', () => {
    expect(contarVocales('hola')).toBe(2);
  });

  // Caso de prueba 2: "rhythm" no debe tener vocales
  test('debe devolver 0 para la palabra "rhythm"', () => {
    expect(contarVocales('rhythm')).toBe(0);
  });

  // Caso de prueba 3: "Educación" debe tener 5 vocales, ignorando mayúsculas y tildes
  test('debe devolver 5 para la palabra "Educación"', () => {
    expect(contarVocales('Educación')).toBe(5);
  });
  
  // Caso de prueba 4: Una frase
  test('debe contar las vocales en una frase', () => {
    expect(contarVocales('El murciélago es un mamífero.')).toBe(12);
  });

  // Caso de prueba 5: Manejar una cadena vacía
  test('debe devolver 0 para una cadena vacía', () => {
    expect(contarVocales('')).toBe(0);
  });

  // Caso de prueba 6: Manejar un argumento no válido
  test('debe lanzar un error si el argumento no es una cadena', () => {
    expect(() => contarVocales(123)).toThrow("El argumento debe ser una cadena de texto.");
  });

});