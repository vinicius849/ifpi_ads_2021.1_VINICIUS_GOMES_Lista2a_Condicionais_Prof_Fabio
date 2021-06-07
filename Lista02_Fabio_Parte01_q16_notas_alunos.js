const input = require('prompt-sync')()


function main(){
    // Entrada
    const nota_1 = input('Nota 1: ')
    const nota_2 = input('Nota 2: ')
    const media_simples = (nota_1 + nota_2) / 2

    if(media_simples >= 7){
        console.log('APROVADO')
    }else if(media_simples < 7){
        input(`${media_simples}`)
    }else if(media_simples >= 5){
        console.log('APROVADO')
    }else{
        console.log('REPROVADO')
    }

}

main()