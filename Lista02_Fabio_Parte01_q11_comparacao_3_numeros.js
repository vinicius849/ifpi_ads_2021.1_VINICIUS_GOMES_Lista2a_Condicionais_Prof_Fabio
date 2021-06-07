const prompt = require('prompt-sync')()


function resultado(){
    const opcao = Number(prompt('Escolha a opção (1,2,3): '))
    const num_1 = Number(prompt('Digite aqui o número 1: '))
    const num_2 = Number(prompt('Digite aqui o número 2: '))
    const num_3 = Number(prompt('Digite aqui o número 3: '))

}

resultado()

// Comparações da questão
    if(opcao == 1){
        console.log(`Opção igual a ${num_1}.`)
    }else if(opcao == 2){
        console.log(`Opcão igual a ${num_2}.`)
    }else if(opcao == 3){
        console.log(`Opção igual a ${num_3}.`)
    }else{
        console.log('Não possui opção de valores dentre 1, 2 e 3. Opção inválida.')
    }

    


