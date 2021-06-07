const prompt = require('prompt-sync')()


function numero_primo_ou_nao(){
    console.log('### Leia um programa que leia de 0(zero) a 100(cem) e verifique se o número é ou não primo ###')
    const selecao = Math.random[0, 100]
    console.log('Digite agora um número qualquer neste intervalo: ', selecao)

}

numero_primo_ou_nao()

function exibir_numeros_primos(){
    console.log('Um número primo é aquele divisível por 1 e por ele mesmo.')

    const num_1 = Number(prompt('Digite um número e diga se é divisível por 1 e por ele mesmo caso primo: '))
    if ((num_1 / 1) && (num_1 / num_1)){
        console.log('O número encontrado é primo.')
    }else if (num_1 % 2 === 0){
        console.log('O número encontrado é par e não é primo.')
    }else if (num_1 % 2 !== 0){
        console.log('O número encontrado é ímpar.')
    }else{
        console.log('O número encontrado não é primo.')
    }
        

}


exibir_numeros_primos()