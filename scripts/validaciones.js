

function validarNombre(){

    let datoInvalido = false;
    let nombre;

    do{

        nombre = prompt('Ingrese nombre del Disco');

        if(nombre == "" || nombre === undefined || nombre == NaN || nombre == null || !isNaN(nombre)){

        datoInvalido = true;
        alert("Hubo un error al cargar el nombre del Disco");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return nombre;
}


function validarArtista(){
    let datoInvalido = false;
    let nombre;
    do{

        nombre = prompt('Ingrese nombre del Autor');

        if(nombre == "" || nombre === undefined || nombre == NaN || nombre == null || !isNaN(nombre)){
            datoInvalido = true;
            alert("Hubo un error al cargar el nombre del Autor");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return nombre;

}

function validarID(){

    let datoInvalido = false;
    let numero;
    do{

        numero = parseInt(prompt('Ingrese un codigo para el Disco de 3 cifras. Ej: 123'));

        if(numero == "" || numero === undefined || numero == NaN || numero == null || isNaN(numero)){
            datoInvalido = true;
            alert("Hubo un error al cargar el numero de codigo del Disco");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return numero;

}

function validarNombreCancion(){

    let datoInvalido = false;
    let nombre;
    do{

        nombre = prompt('Ingrese nombre de la Cancion');

        if(nombre == "" || nombre === undefined || nombre == NaN || nombre == null || !isNaN(nombre)){
            datoInvalido = true;
            alert("Hubo un error al cargar el nombre de la Cancion");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return nombre;


    
}

function validarDuracionCancion(){

  
    let datoInvalido = false;
    let numero;
    do{

        numero = parseInt(prompt('Ingrese la duracion de la cancion en segundos.'));

        if(numero == "" || numero === undefined || numero == NaN || numero == null || isNaN(numero)){
            datoInvalido = true;
            alert("Hubo un error al cargar el numero de codigo del Disco");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return numero;


    
}
