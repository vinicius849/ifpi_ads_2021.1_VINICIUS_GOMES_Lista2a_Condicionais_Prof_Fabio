const input = require('prompt-sync')()


function main(){

    // Entrada
    console.log('Professor 1 >>>')
    const horas = input('Insira aqui a quantidade de horas: ')
    const valor_hora = input('Insira aqui o valor por hora: ')
    console.log('Professor 2 >>>')
    const horas_2 = input('Insira aqui a quantidade de horas: ')
    const valor_hora_2 = input('Insira aqui o valor por hora: ')

    // Desenvolvimento
    if ((horas * valor_hora) > (horas_2 * valor_hora_2)){
        console.log('O professor 1 possui o maior salário.')
    }else if((horas * valor_hora) < (horas_2 * valor_hora_2)){
        console.log('O professor 2 possui o maior salário.')
    }else{
        console.log('Os salários serão iguais.')
    }

}

main()