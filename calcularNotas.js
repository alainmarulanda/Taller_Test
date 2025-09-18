function calcularPromedio(notas) {
  // Validar si las notas están en el intervalo de 0 a 5
 for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 0 || notas[i] > 5) {
      throw new Error("Notas inválidas"); 
    }
  }

  // Caso de lista vacía
  if (notas.length === 0) {
    return 0;
  }
  
  // Sumar todos los números en el arreglo
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  
  // Calcular y retornar el promedio
  return suma / notas.length;
}

// Exportar la función para que Jest pueda importarla
module.exports = calcularPromedio;