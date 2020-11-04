let bloques = 4;

botonIniciar = document.querySelector('#boton');
botonIniciar.onclick = comienzaJuego;

pantallaInicio = document.querySelector('.display-container');

pantallaJuego = document.querySelector('.espacio');
pantallaJuego.style.visibility = "hidden";

crearBloques();

function comienzaJuego(){
    ocultarPantallaInicio();
    obtenerDatos();
    reiniciarStats();
    juegaMaquina();



    function siguienteRonda(){
        let index = arrayMaquina.length - 1

        $campo.forEach(function($cuadro) {
            $cuadro.onclick = eleccion;
        });


    function eleccion(e) {
        const $cuadro = e.target;
        arrayJugador.push(Number($cuadro.textContent));
        resaltar($cuadro);
        
        setTimeout(function wait(){
            comprobar()}, 1000);

        function comprobar(){
            for(i=0;i<arrayJugador.length;i++){
                if(arrayMaquina[i] !== arrayJugador[i]){
                    console.clear();
                    console.log("Perdiste");
                    perder();
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




function numeroAleatorio(){
    return (Math.floor(Math.random() * 4) + 1)
}

function reiniciarStats(){
    arrayJugador = [];
    arrayMaquina = [];
    racha = 0;
}

function juegaMaquina(){
    arrayMaquinaElement = [];
    arrayMaquina.push(numeroAleatorio());
    console.log(arrayMaquina); 
    
    for(i=0;i<arrayMaquina.length;i++){
        arrayMaquinaElement.push(document.getElementById(arrayMaquina[i]))
    }
    console.log(arrayMaquinaElement);
    resaltarCuadrosMaquina();
}

function contadorRacha(){
    console.log(`racha ${++racha}`);
}

function perder(){
    pantallaInicio.style.visibility = "visible"
    pantallaJuego.style.visibility = "hidden"
}

function ocultarPantallaInicio(){
    pantallaInicio.style.visibility = "hidden"
    pantallaJuego.style.visibility = "visible"
}

function obtenerDatos(){
    $campo = document.querySelectorAll('.bloque');
}

function crearBloques(){
    for(i=0;i<bloques;i++){
        $bloque = document.createElement('div');
        $bloque.className = "bloque";
        $bloque.id = `${i+1}`
        $bloque.textContent = i+1;


        pantallaJuego.appendChild($bloque);
    }
}

function resaltarCuadrosMaquina(){
    timer = 0
    arrayMaquinaElement.forEach(function(e){
        timer = timer + 1;
        setTimeout(function(){
            resaltar(e); }, 500 * timer);
    })
    inhabilitarInput();
}


function resaltar($cuadro){
    $cuadro.style.opacity = 1;
    setTimeout(function() {
      $cuadro.style.opacity = 0.5;
    }, 100);
}


function inhabilitarInput(){
    console.log(timer);
}

