// ESTRUTURA DE REPETIÇÃO DENTRO DE UMA ARROW FUNCTION
const {select, input, checkbox} = require('@inquirer/prompts')


let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,  
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta"})

    if (meta.length == 0) {
        console.log("A meta nao pode ser vazia")
        return
    }

    metas.push(
        {value: meta, checked: false}
    )

}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada")
        return
    }

    respostas.forEach((respostas) => {
        const meta = metas.find((m) => {
            return m.value == respostas
        })
        
        meta.checked =true
    })
    console.log('Meta(s) marcadas como concluída(s)')
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked

    })
    if(realizadas.length == 0){
        console.log('Não existem metas realizadas! :(')
        return
    }
    await select({
        message: "Metas Realizadas",
        choices: [...realizadas]
    })
}

const start = async() => {

    while(true){
    
        const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar Meta",
                value: "Cadastrar"
            },
            {
                name: "Listar Metas",
                value: "Listar"
            },
            {
                name: "Metas Realizadas",
                value: "realizadas"
            },
            {
                name: "Sair",
                value: "Sair"

            }
        ]
    })

        switch(opcao){
            case "cadastrar":
            await cadastrarMeta()   
            console.log(metas)
                break

            case "Listar":
                await listarMetas()
                break

            case "realizadas":
                await metasRealizadas()
                break

            case "sair":
                console.log("Até a próxima")
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