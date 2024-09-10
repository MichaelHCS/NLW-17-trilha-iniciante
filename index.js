// ESTRUTURA DE REPETIÇÃO DENTRO DE UMA ARROW FUNCTION
const {select} = require('@inquirer/prompts')

const start = async () => {

    while(true){
       

        const opcao = await select({




        })




        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "Listar":
                console.log("vamos lIstar")
                break
            case "sair":
                return

        }    
    }
}



start()








//console.log("Hello FDP") 
// CONST = nao permite alteração da variavel depois de ja definida e LET = permite a alteração depois de difinida 
// dentro de {} sao variaveis LOCAIS e fora são definidas como GLOBAIS
// COmando RELOAD WINDOWNS reset o vs code

//let = metas = ["Alô", "Michael"]

//console.log(metas[1] + " " + metas[0])


//let meta = {
  //  value: 'Ler um livro por mês',
    //checked: false,
//}

//let metas = [
    //meta,
   // {
    //    value: "caminhar 20 minutos todos os dias",
      //  checked: false    
  //  }
//]

//console.log(metas[1].value)