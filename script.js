function jugar(eleccionJugador) {
    const opciones = ['🪨', '📜', '✂️']; // Opciones como emojis
    const emojisMap = {
        piedra: '🪨',
        papel: '📜',
        tijera: '✂️'
    };

    const eleccionMaquinaDiv = document.getElementById('eleccion-maquina');
    const resultadoDiv = document.getElementById('resultado');

    eleccionMaquinaDiv.innerText = '🤔'; // Mostrar ícono inicial de "pensando"
    resultadoDiv.innerText = ''; // Limpiar resultado previo

    let animacionInterval = setInterval(() => {
        const opcionAleatoria = opciones[Math.floor(Math.random() * opciones.length)];
        eleccionMaquinaDiv.innerText = opcionAleatoria; // Cambiar entre emojis
    }, 200);

    setTimeout(() => {
        clearInterval(animacionInterval); // Detener animación

        const eleccionFinal = opciones[Math.floor(Math.random() * opciones.length)];
        eleccionMaquinaDiv.innerText = eleccionFinal; // Mostrar elección final

        // Determinar resultado
        let resultado = '';
        if (emojisMap[eleccionJugador] === eleccionFinal) {
            resultado = 'Empate';
        } else if (
            (eleccionJugador === 'piedra' && eleccionFinal === '✂️') ||
            (eleccionJugador === 'papel' && eleccionFinal === '🪨') ||
            (eleccionJugador === 'tijera' && eleccionFinal === '📜')
        ) {
            resultado = '¡Has ganado!';
        } else {
            resultado = 'Has perdido';
        }

        resultadoDiv.innerText = resultado; // Mostrar el resultado
    }, 2000); // Tiempo total de la animación
}

