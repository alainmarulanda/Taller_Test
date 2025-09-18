const validatorScore = require('./scoreValidator')
// Importamos la función que vamos a probar


// Punto 1: Jugador con 3 correctas y 2 incorrectas
  test('Calcular 26 puntos: 3 buenas y 2 malas', () => {
    const preguntas = [true, true, true, false, false];
    expect(validatorScore(preguntas.length, preguntas)).toBe(26);
  });

// Punto 2: Jugador con todas correctas (3 correctas)
  test('Aplicar bono con 3 correctas y 0 malas', () => {
    const preguntas = [true, true, true];
    // Puntaje base: 3 * 10 = 30. Con bonus: 30 + 5 = 35.
    expect(validatorScore(preguntas.length, preguntas)).toBe(35);
  });
  
// Punto 3: Jugador con todas incorrectas (3 incorrectas)
  test('Puntsje siempre positivo', () => {
    const preguntas = [false, false, false];
    // Puntaje base: 3 * (-2) = -6. El puntaje se ajusta a 0.
    expect(validatorScore(preguntas.length, preguntas)).toBe(0);
  });

// Punto 4: Jugador sin respuestas (vector vacío)
  test('Puntaje 0 si no hay preguntas', () => {
    const preguntas = [];
    expect(validatorScore(preguntas.length, preguntas)).toBe(0);
  });

// Punto 5: Caso borde (1 correcta y nada más)
  test('Retorna 10 para 1 sola pregunta', () => {
    const preguntas = [true];
    expect(validatorScore(preguntas.length, preguntas)).toBe(10);
  });

// Borde: puntaje que se convierte en 0
  test('Puntaje siempre 0 o mayor', () => {
    const preguntas = [true, false, false, false, false, false]; // 10 - (5*2) = 0.
    expect(validatorScore(preguntas.length, preguntas)).toBe(0);
  });
