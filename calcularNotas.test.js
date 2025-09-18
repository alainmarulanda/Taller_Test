// Importamos la función que vamos a probar
const calcularPromedio = require('./calcularNotas');

describe('Pruebas para la función de promedio', () => {

  // Punto 1 1: Arreglo de números enteros
  test('Calcular el promedio de [3, 4, 5] correctamente', () => {
    const notas = [3, 4, 5];
    expect(calcularPromedio(notas)).toBe(4);
  });
  
  // Punto 2: Un solo número en el arreglo
  test('debe retornar el mismo número si solo hay uno en el arreglo', () => {
    const notas = [5];
    expect(calcularPromedio(notas)).toBe(5);
  });

  // Caso 3: Vector de notas vacío
  test('debe retornar 0 si el arreglo está vacío', () => {
    const notas = [];
    expect(calcularPromedio(notas)).toBe(0);
  });

  // Caso 4: Números decimales
  test('debe manejar promedios con números decimales correctamente', () => {
    const notas = [2.5, 3.5];
    expect(calcularPromedio(notas)).toBe(3);
  });

  // Caso 5: Notas fuera del rango [0, 5]
  test('debe lanzar un error para notas inválidas', () => {
    const notasInvalidas = [3, 4, 6];
    const notasInvalidas1= [-1, 2, 5]
    expect(() => calcularPromedioConError(notasInvalidas)).toThrow();
    expect(() => calcularPromedioConError(notasInvalidas1)).toThrow();
})
});