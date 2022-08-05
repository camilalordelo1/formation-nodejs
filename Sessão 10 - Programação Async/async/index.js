//PROMISE PARA PEGAR ID
function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

//PROMISE DE BUSCAR EMAIL
function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("camilalordelo15@gmail.com")
        },2000)
    })
}

//PROMISE DE ENVIO DE EMAIL
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            var deuErro = true;
            if(!deuErro){
                resolve({
                    time: 6,
                    to: "camilalordelo15@gmail.com"
                }) // Só pode ser passado um parametro, que pode ser um JSON
            }else{
                reject("Fila cheia") // Recebe um único parâmetro também, que pode ser um JSON
            }
        }, 4000)
    });
}



//TRATANDO ERROS COM REJEIÇÃO DE PROMISE COM ASYNC AWAIT
//USANDO TRY
async function principal(){
    var id = await pegarId()
    var email = await buscarEmailNoBanco(id)
    try {
        await enviarEmail("Olá como vai?", email)
        console.log("E-mail enviado com sucesso")
    } catch(erro){
        console.log(erro)
    }
}

principal()

