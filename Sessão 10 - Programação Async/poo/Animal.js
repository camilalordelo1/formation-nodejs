class Animal{
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10
    }

    MetodoQualquer(){
        console.log("Esse método faz parte da classe mãe")
    }
}


// Classe cachorro herda classeanimal
class Cachorro extends Animal{
    constructor(nome, idade, preco, raça, peso){
        super(nome, idade, preco) //Alterando contructor sem perder os atributos da classe mãe
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log("Au, au!")
    }

    ChecarEstoque(){
        return 67
    }

    MetodoQualquer(){
        console.log("Funções da classe mãe!")
        super.MetodoQualquer(); //pegar funcionalidade
        console.log("Adicionando outras funcionalidades")
    }
}

var dog = new Cachorro("Dogão", 5, 250)

console.log(dog.ChecarEstoque())
console.log(dog.Latir())
dog.MetodoQualquer()

//Herança em múltiplos níveis
class PastorAlemao extends Cachorro {

}

class PastorAlemaoMacho extends PastorAlemao {
    
}