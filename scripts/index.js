'use strict';

let disquera = new Disquera();


/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

/**
 * Llamada desde un boton. Pide los datos para un disco.
 */
function cargar() {
    // TODO:

    disquera.sumarDisc();

}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
    // TODO
    disquera.limpiar('.containerDisc');
    disquera.show('.containerDisc');

};
