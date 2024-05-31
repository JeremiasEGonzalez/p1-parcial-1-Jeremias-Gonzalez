
class PlayList{

    constructor(){
        this.temario = [];
    }

    agregarTema(){

        
            do{
                
                const nombreCancion = validarNombreCancion();
                let duracion = validarDuracionCancion();

                let cancion = new Cancion(nombreCancion, duracion);
                
                this.temario.push(cancion);

            }while(confirm('mas canciones?'))

    }

    show() {
        for(let tema of this.temario) {
          tema.show();
        }
      }


}

