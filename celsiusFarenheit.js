function celsiusToFahrenheit(celsius) {
  // Asegurarse de que el valor de entrada es un número
  if (celsius.length === 0) {
    throw new Error("El valor de entrada no debe ser vacio");
  }
  
  if (typeof celsius !== 'number') {
    throw new Error("El valor de entrada debe ser un número.");
  }

  let farenheit =(celsius * 9/5) + 32
  return Number(farenheit.toFixed(0));
}

module.exports =celsiusToFahrenheit