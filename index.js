// ESTRUTURA DE REPETIÇÃO DENTRO DE UMA ARROW FUNCTION
const {select, input, checkbox} = require('@inquirer/prompts')

let mensagem = "Bem vindo ao APP de Metas";

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,  
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta: "})

    if (meta.length == 0) {
        mensagem = "A meta nao pode ser vazia"
        return
    }

    metas.push(
        {value: meta, checked: false}
    )

    mensagem = "Meta cadastrada com sucesso!"

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
        mensagem = "Nenhuma meta selecionada"
        return
    }

    respostas.forEach((respostas) => {
        const meta = metas.find((m) => {
            return m.value == respostas
        })
        
        meta.checked =true
    })
    mensagem = 'Meta(s) marcada(s) como concluída(s)'
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked

    })
    if(realizadas.length == 0){
        mensagem = 'Não existem metas realizadas! :('
        return
    }
    await select({
        message: "Metas Realizadas" + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true

    })
    if(abertas.lenght == 0){
        mensagem = "Não existem metas abertas! :)"
        return 

    }

    await select({
        message: "Metas Abertas" + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return{value: meta.value, checked: false}
    })

    const itemsADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if(itemsADeletar.length == 0){
        mensagem = "Nenhum item para deletar!"
        return
    }
    itemsADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })

    })
    mensagem = "Meta(s) deletada(s) com sucesso!"
}

const mostrarMensagem = () => {
    console.clear();

    if(mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start = async() => {

    while(true){
        mostrarMensagem()

        const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar Meta",
                value: "cadastrar"
            },
            {
                name: "Listar Metas",
                value: "listar"
            },
            {
                name: "Metas Realizadas",
                value: "realizadas"
            },
            {
                name: "Metas abertas",
                value: "abertas"
            },
            {
                name: "Deletar Metas",
                value: "deletar"
            },
            {
                name: "Sair",
                value: "sair"

            }
        ]
    })

        switch(opcao){
            case "cadastrar":
            await cadastrarMeta()   
                break

            case "listar":
                await listarMetas()
                break

            case "realizadas":
                await metasRealizadas()
                break

            case "abertas":
                await metasAbertas()
                break

            case "deletar":
                await deletarMetas()
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