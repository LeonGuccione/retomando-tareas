$campo = document.querySelectorAll('.bloque');


function comienzaJuego(){
    reiniciarStats();
    juegaMaquina();


    function siguienteRonda(){
        let index = arrayMaquina.length - 1

        $campo.forEach(function($cuadro) {
            $cuadro.onclick = eleccion;
        });

    function eleccion(e) {
        const $cuadro = Number((e.target).textContent)
        arrayJugador.push($cuadro);

        comprobar();

        function comprobar(){
            for(i=0;i<arrayJugador.length;i++){
                if(arrayMaquina[i] !== arrayJugador[i]){
                    console.log("asasdas");
                    comienzaJuego();
                }
                if(arrayMaquina[i] === arrayJugador[i]){

                    if(arrayMaquina.length === arrayJugador.length && arrayMaquina[index] === arrayJugador[index]){
                        arrayJugador = [];
                        juegaMaquina();
                        contadorRacha();
                        siguienteRonda();
                    }
                }
            }
        }

    }

    }
    siguienteRonda();
}
comienzaJuego();



function numeroAleatorio(){
    return (Math.floor(Math.random() * 4) + 1)
}

function reiniciarStats(){
    arrayJugador = [];
    arrayMaquina = [];
    racha = 0;
}

function juegaMaquina(){
    arrayMaquina.push(numeroAleatorio());
    console.log(arrayMaquina)
}

function contadorRacha(){
    console.log(`racha ${++racha}`);
}