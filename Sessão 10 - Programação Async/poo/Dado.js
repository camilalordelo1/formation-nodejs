// Sistema de cassino
// Vários tipos de dados
// Rolar dados

class Dado {
    constructor(nfaces){
        this.nfaces = nfaces;
    }

    Rolar(){
        this.nfaces = Math.floor(this.nfaces)
        var resultado = Math.floor(Math.random() * (this.nfaces - 1)) + 1;
        console.log("Resultado do dado: " + resultado)
    }
}

var dado6 = new Dado(6)
var dado100 = new Dado(100)

dado6.Rolar()
dado100.Rolar()
