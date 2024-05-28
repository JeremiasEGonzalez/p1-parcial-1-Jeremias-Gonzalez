class Cancion{

    constructor(nombreCancion, duracion){
        
        this.nombreCancion = nombreCancion;
        this.duracion = duracion;

    }

    exportPistas(){
        return `    <div class="cancion">
                    <p>Nombre:${this.nombreCancion}</p>
                    <p>Duracion:${this.duracion}sg</p>
                    </div>`
    }


    show(etiqueta) {
        document.querySelector(etiqueta).innerHTML += this.exportPistas();
      }



}