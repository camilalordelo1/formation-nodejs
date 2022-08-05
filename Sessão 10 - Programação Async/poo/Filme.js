class Filme{
    // ATRIBUTOS DA CLASSE
    constructor(titulo, ano, genero, diretor, atores, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
    }

    Reproduzir(){
        console.log(`Reproduzindo...`)
    }

    Pausar(){
        console.log("Pausado || ")
    }

    Avançar(){
        console.log("Avançar >> ")
    }

    Fechar(){
        console.log("Fechar X")
    }

    Ficha(){
        console.log("Título: " + this.titulo)
        console.log("Ano de lançamento: " + this.ano)
        console.log("Gênero: " + this.genero)
        this.Reproduzir()
    }
}

var vingadores = new Filme("Vinagores 2", 2014, "Ação", "Alguém", "2h")
vingadores.Ficha()

