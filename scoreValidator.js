//Funcion para pruebas y lógica
function validatorScore(numero_preguntas, vector_preguntas) {
    let buenas = 0;
    let malas = 0;
    let puntaje = 0;

    // 1. Contar las respuestas correctas e incorrectas
    for (let i = 0; i < vector_preguntas.length; i++) {
        if (vector_preguntas[i] === true) {
            buenas += 1;
        } else {
            malas += 1;
        }
    }

    // 2. Calcular el puntaje inicial
    puntaje = (buenas * 10) - (malas * 2);

    // 3. Aplicar el bonus. Solo se da si hay más de una pregunta y todas son correctas.
    if (numero_preguntas > 1 && buenas === numero_preguntas) {
        puntaje += 5;
    }

    // 4. Asegurar que el puntaje nunca sea negativo
    if (puntaje < 0) {
        puntaje = 0;
    }

    return puntaje;
}

module.exports = validatorScore