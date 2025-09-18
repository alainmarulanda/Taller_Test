const contarVocales = (str) => {
  if (typeof str !== 'string') {
    throw new Error("El argumento debe ser una cadena de texto.");
  }
  
  // Normalizamos la cadena para manejar tildes y convertimos a minúsculas
  const cadenaNormalizada = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;
  
  for (let i = 0; i < cadenaNormalizada.length; i++) {
    const caracter = cadenaNormalizada[i];
    if (vocales.includes(caracter)) {
      contador++;
    }
  }
  
  return contador;
};

module.exports = contarVocales;