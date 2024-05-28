
class PlayList{

    constructor(){
        this.temario = [];
    }

    agregarTema(){

        
            do{
                
                const nombreCancion = prompt('Ingrese nombre de la cancion');
                let duracion = parseInt(prompt('Ingrese duracion de la cancion'));

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

