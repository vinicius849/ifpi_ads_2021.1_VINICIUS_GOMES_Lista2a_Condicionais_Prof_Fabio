const prompt = require('prompt-sync')()


const numero = Number(prompt('Digite um número: '))

if(numero % 2 === 0){
    console.log(`Este número ${numero} é par.`)
}else{
    console.log(`Este número ${numero} é ímpar.`)
}

function eh_par(valor){
    if (valor % 2 === 0){
        return true
    }else{
        return false
    }

}

eh_par()

