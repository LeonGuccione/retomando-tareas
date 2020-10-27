function capturarDatos(){
    $form = document.querySelector('[name=formulario]');

    $nombre = document.querySelector('[name=nombre]').value;

    $ciudad = document.querySelector('[name=ciudad]').value;

    $comportamiento = $form.comportamiento;

    $descripcion = document.querySelector('[name=descripcion-regalo').value;

    $errores = document.querySelector('#errores');
}



function validarNombre(nombre){
    if(nombre === ""){
        return 'No puedes dejar el nombre vacio';
    }
    if(nombre.length >= 50){
        return 'No puedes ingresar mas de 50 caracteres';
    }
    if(nombre.length <= 2){
        return 'No puedes ingresar menos de 2 caracteres';
    }

    return true;
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return 'Debes seleccionar una ciudad';
    }

    return true;
}

function validarDescripcion(descripcion){
    if(descripcion === ""){
        return '¿No deseas recibir nada?';
    }
    if(descripcion.lenght >= 250){
        return 'Ingresa menos caracteres';
    }

    return true;
}


let $enviar = document.querySelector('[name=submit]');

$enviar.onclick = function(){

    capturarDatos();
    borrarErroresAnteriores();

    const errorNombre = validarNombre($nombre);
    const errorCiudad = validarCiudad($ciudad);
    const errorDescripcion = validarDescripcion($descripcion);


    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcion
    };

    let contadorErrores = 0;
    const keys = Object.keys(errores);
    console.log(keys);


    keys.forEach(function(key){
        const error = errores[key];

        if(error !== true){

            $form[key].className = "error";
            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
            contadorErrores = contadorErrores + 1;

        }else{
            $form[key].className = "";
        }
        
    });

    if(contadorErrores === 0){
        exito = document.querySelector('#exito')
        exito.className = "";
        $form.className = "oculto";

        setTimeout(function(){
            window.location.href = "wishlist.html";; 
            }, 5000);
    };
    
function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');
    for (let i = 0; i < $errores.length; i++) {
      $errores[i].remove();
    }
  }


/*
    if(validarNombre($nombre) !== true){
        console.log(validarNombre($nombre));
        $nombre.className = "error";
    }else{
        $nombre.className = "";
    };

    if(validarCiudad($ciudad) !== true){
        console.log(validarCiudad($ciudad));
        $ciudad.className = "error";
    }else{
        $ciudad.className = "";
    };

    if(validarDescripcion($descripcion) !== true){
        console.log(validarDescripcion($descripcion));
        $descripcion.className = "error";
    }else{
        $ciudad.className = "";
    };

    if(validarNombre($nombre) === true &&
        validarCiudad($ciudad) === true &&
        validarDescripcion($descripcion) === true
    ){
            return alert("Todo Ok");
    }

*/

event.preventDefault();
};



