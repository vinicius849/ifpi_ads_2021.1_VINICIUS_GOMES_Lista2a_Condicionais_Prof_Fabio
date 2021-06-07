const input = require('prompt-sync')()

// Mostrar em tela a data atual em que se passa
function data_atual(){
    console.log('### Calcular a idade exata de uma pessoa em anos ###')
    const d1 = Number(input('Digite aqui o dia: '));
    const d2 = Number(input('Digite aqui o mês: '));
    const d3 = Number(input('Digite aqui o ano: '));
    console.log('A data atual é ' + d1 + ', do mês ' + d2 + ', do ano de '+ d3 + '.')
}

data_atual()

// Mostrar em tela a data de nascimento de uma pessoa
function data_nascimento(){
    const d4 = Number(input('Digite aqui o dia: '));
    const d5 = Number(input('Digite aqui o mês: '));
    const d6 = Number(input('Digite aqui o ano: '));
    console.log('A data de nascimento de Vinícius é ' + d4 + ', do mês ' + d5 + ', do ano de '+ d6 + '.')
}

data_nascimento()

// Processamento e cálculo de idade exata
function diferenca_idades(){
    const data_atual = Number(input('Digite quanto vale d3: '));
    const data_nascimento = Number(input('Digite quanto vale d6: '));
    const diferenca = (data_atual - data_nascimento)
    console.log('A idade exata de uma pessoa será: ', diferenca)
}

diferenca_idades()
