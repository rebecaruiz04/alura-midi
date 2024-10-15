function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    tecla.onclick = function () {
        playSonido(idAudio);
    };
}

// let contador = 0;
// while (contador < 9) {
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#sonido_${instrumento}`;

//     tecla.onclick = function () {
//         playSonido(idAudio);
//     };
//     contador += 1;
// }
