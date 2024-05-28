



class Discos {

    constructor(disco, autor, id, pistas, portada){

        this.nombreDisc = disco;
        this.autor = autor;
        this.id = id;
        this.pistas = pistas;
        this.portada = './img/Imagen_no_disponible.svg.png';
        
    }


    exportDisc(){

        let html = `<div class="disc">
                    <img src=${this.portada} alt="imagen del disco">
                    <div>
                    <h3>Disco: ${this.nombreDisc}</h3>
                    <p>Autor: ${this.autor}</p>
                    <p>ID: ${this.id}</p>
                    </div>
                    </div>
                    <p>Caciones
                    </p>
                    `

        return html;
    }

    show(etiqueta){
        document.querySelector(etiqueta).innerHTML += this.exportDisc();
    }


}