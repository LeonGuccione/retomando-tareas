
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'No puedes dejar el nombre vacio',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'No puedes ingresar mas de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    
    console.assert(
        validarNombre('aa') ===
        'No puedes ingresar menos de 2 caracteres',
        'Validar nombre no validó que el nombre tenga mas de 2 caracteres',
    );

}


function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === 'Debes seleccionar una ciudad',
        'Validar ciudad no validó que el campo esté vacio',
    );
}

