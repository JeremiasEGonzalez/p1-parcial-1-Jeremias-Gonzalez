



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

let idValidator = [];

function validarID(){

    let datoInvalido = false;
    let numero;
    do{



        numero = prompt('Ingrese un codigo para el Disco de 3 cifras. Ej: 123');

        if(numero === "" ){
            alert("no puede estar vacio")
            validarID();
        }

        if(!isNaN(numero)){
            numero = parseInt(numero);
        }else{
            alert("No es un dato numerico");
            validarID();
        }

        

        if(numero === undefined || numero == null){
            datoInvalido = true;
            alert("Hubo un error al cargar el numero de codigo del Disco");

        }else{
            datoInvalido = false;
        }

        for (let i = 0; i < idValidator.length; i++) {

            if(numero === idValidator[i]){
                alert("El id ya se ha usado");
                validarID();
            }
          }

          idValidator.push(numero);

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

        numero = prompt('Ingrese la duracion de la cancion en segundos.');

        if(numero === "" ){
            alert("no puede estar vacio")
            validarDuracionCancion();
        }

        if(!isNaN(numero)){
            numero = parseInt(numero);
        }else{
            alert("No es un dato numerico");
            validarDuracionCancion();
        }

        if( numero === undefined || numero === null){
            datoInvalido = true;
            alert("Hubo un error al cargar la duracion de la cancion");

        }else{
            datoInvalido = false;
        }

    }while(datoInvalido)

    return numero;


    
}
