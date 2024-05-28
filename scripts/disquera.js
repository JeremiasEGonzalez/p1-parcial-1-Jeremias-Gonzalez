


class Disquera {

    constructor(){

        this.disc = [];

    }


    sumarDisc(){

        let nombre = validarNombre();
        let artista = validarArtista();
        let id = validarID();

        let pistas = new PlayList();
        pistas.agregarTema();
        let cd = new Discos(nombre, artista, id, pistas);

        this.disc.push(cd);
    }

    show(etiqueta) {
        for(let cd of this.disc) {
          cd.show(etiqueta);

            for(let tema of cd.pistas.temario){
              tema.show(etiqueta)
            }

        }
      }

      limpiar(etiqueta){
        document.querySelector(etiqueta).innerHTML = '';
      }



}