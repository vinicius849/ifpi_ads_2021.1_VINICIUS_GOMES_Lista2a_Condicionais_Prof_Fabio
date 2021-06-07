const input = require('prompt-sync')()

// Ler uma primeira data
function datas_totais(){
    console.log('### Leitura de datas ###')
}

datas_totais()

// Mostrar em tela uma data com 3 variáveis estabelecidas
    const d1 = Number(input('Digite aqui o dia: '));
    const d2 = Number(input('Digite aqui o mês: '));
    const d3 = Number(input('Digite aqui o ano: '));
    console.log('A primeira data é ' + d1 + ', do mês ' + d2 + ', do ano de '+ d3 + '.')

// Mostrar em tela uma data também com 3 variáveis
    const d4 = Number(input('Digite aqui o dia: '));
    const d5 = Number(input('Digite aqui o mês: '));
    const d6 = Number(input('Digite aqui o ano: '));
    console.log('A segunda data é ' + d4 + ', do mês ' + d5 + ', do ano de '+ d6 + '.')

// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Hoje é ' + str_data + ' às ' + str_hora);
