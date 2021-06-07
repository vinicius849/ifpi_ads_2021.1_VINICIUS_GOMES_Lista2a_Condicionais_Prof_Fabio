const prompt = require('prompt-sync')()

const hora = Number(prompt('Hora: '))
const minutos = Number(prompt('Minutos: '))
const duracao_jogo = (hora * minutos) + minutos

console.log('A duração do jogo termina em até 24 horas do dia seguinte.')

if (duracao_jogo < 24){
    console.log('A partida começou.')
}else{
    console.log('A partida terminou em menos de 24 horas.')

function partida_jogo(){
    console.log('JOGOS MEDIEVAIS.')
}

partida_jogo()