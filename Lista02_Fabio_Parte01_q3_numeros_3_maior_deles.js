const prompt = require('prompt-sync')()


function numeracao(){
console.log('Leia 3 números e diga qual é o maior deles.')
var n1 = Number(prompt('Primeiro número: '))
var n2 = Number(prompt('Segundo número: '))
var n3 = Number(prompt('Terceiro número: '))

// Verificar a condição
if(n1 > n2){
    console.log('O número 1 é o maior.')
}
if(n1 < n2){
    console.log('O número 2 é o maior.')
}
if(n3 > n1){
    console.log('O número 3 é o maior.')
}

}

numeracao()