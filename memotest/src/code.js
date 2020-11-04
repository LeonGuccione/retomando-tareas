numerosArray = [1,2,3,4,5,6,7,8];
numerosTotales = numerosArray.concat(numerosArray);
countdown = numerosArray.length;

limpiarArray();

$bloque = document.querySelectorAll('.col');

let index = numerosTotales.length;

$bloque.forEach(function(){
    asignarBloques();
})


habilitarInputs();

function eleccion(e){
    $campo = e.target;
    console.log($campo);

    arrayTemporal.push($campo);
    console.log(arrayTemporal);

    mostrarCuadros();

    arrayTemporal[0].classList.add("bloqueado");

    if(arrayTemporal.length === 2){
        arrayTemporal[0].classList.remove("bloqueado");
        chequear();
        limpiarArray();
    }
}



function asignarBloques(){
    while(index>0){
        index--;
        bloqueRandom = Math.floor(Math.random() * numerosTotales.length);
        numeroAsignado = numerosTotales.splice(bloqueRandom,1);
        //$bloque[index].innerText = numeroAsignado;  --> Para ver los numeros de cada bloque.
        $bloque[index].id = numeroAsignado;
    }
}

function limpiarArray(){
    arrayTemporal = []
}

function chequearVictoria(){
    countdown = countdown - 1;

    if(countdown === 0){
        console.log("ganaste")
    }
}

function mostrarCuadros(){
    for(i=0;i<arrayTemporal.length;i++){
        arrayTemporal[i].innerText = arrayTemporal[i].id;
        arrayTemporal[i].style.background = "white"
    }
}

function ocultarCuadros(cuadro1,cuadro2){
    cuadro1.innerText = "";
    cuadro2.innerText = "";

    cuadro1.style.background = "black";
    cuadro2.style.background = "black";
}

function chequear(){
    if(arrayTemporal[0].id === arrayTemporal[1].id){

        arrayTemporal[0].classList.add("bloqueado");
        arrayTemporal[1].classList.add("bloqueado");
        console.log("ok");

        mostrarCuadros();
        chequearVictoria();
    }else{
        bloquearInputs();
        console.log("not ok");

        setTimeout(ocultarCuadros, 800, arrayTemporal[0], arrayTemporal[1]);
        setTimeout(habilitarInputs, 800);
    }
}

function bloquearInputs(){
    $bloque.forEach(function($campo){
        $campo.onclick = "";
        $campo.style.cursor = "default";
    })
}

function habilitarInputs(){
    $bloque.forEach(function($campo){
        $campo.onclick = eleccion;
        $campo.style.cursor = "pointer"
    })
}
