function esPalindromo(cadena) {

  const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (cadenaLimpia.length === 0) {
    return true;
  }
  
  const cadenaInvertida = cadenaLimpia.split('').reverse().join('');

  return cadenaLimpia === cadenaInvertida;
}

module.exports =esPalindromo