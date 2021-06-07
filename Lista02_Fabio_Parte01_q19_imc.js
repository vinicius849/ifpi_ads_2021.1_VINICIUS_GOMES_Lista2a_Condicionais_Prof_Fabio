const prompt = require('prompt-sync')()


function indice_corporeo(){
    console.log('### IMC DE UMA PESSOA ###')
}

indice_corporeo()

// Questionamento
const peso = Number(prompt('Digite aqui seu peso(em Kg): '))
const altura = Number(prompt('Digite aqui sua altura(em metros): '))
const imc = (peso / altura ** 2)

if(imc < 25){
    console.log('PESO NORMAL')
}else if(imc > 25 <= 30){
    console.log('OBESO')
}else if(imc > 30){
    console.log('OBESO MÓRBIDO')
}else{
    console.log('Nenhuma das anteriores.')
}

