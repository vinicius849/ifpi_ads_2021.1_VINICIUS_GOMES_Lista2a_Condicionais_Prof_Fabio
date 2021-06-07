const prompt = require('prompt-sync')()


function resolucao(){
    console.log('### Método detalhado questão 1 ###')
    const num_1 = Number(prompt('Primeiro número: '))
    const num_2 = Number(prompt('Segundo número: '))
    const num_3 = Number(prompt('Terceiro número: '))

    // Fazendo outro método
    if(num_1 === num_2 === num_3){
    console.log('Essa condição vale para os 3 números que são iguais entre si.')
    }else if (num_1 === num_2){
    console.log('Vale esta condiçaõ para 2 números.')
    }else if(num_2 === num_3){
    console.log('A condição vale para casos 2 e 3.')
    }else if(num_1 === num_3){
    console.log('A condição vale para casos 1 e 3.')
    }else
    console.log('Os três números são distintos.')

}

resolucao()
