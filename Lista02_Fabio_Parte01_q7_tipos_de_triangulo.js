const input = require('prompt-sync')()


function classificacao_triangulos(a1, a2, a3){
    if((a1 == a2) && (a2 == a3)){
        console.log('Aqui és um triângulo equilátero.')
    }else if((a1 != a2) && (a2 != a3) && (a1 != a3)){
        console.log('Aqui és um triângulo escaleno.')
    }else{
        console.log('Aqui és um triângulo isósceles.')
    }
}
function main(){
    // Entrada da questão
    const lado_1 = Number(input('Digite o lado 1: '))
    const lado_2 = Number(input('Digite o lado 2: '))
    const lado_3 = Number(input('Digite o lado 3: '))

    // Processamento + Final
    if(lado_1 + lado_2 > lado_3){
        console.log('Os lados formam um triângulo.')
        classificacao_triangulos(lado_1, lado_2, lado_3)
    }else{
         console.log('Os lados são diferentes e não formam um triângulo.')
    }
}

main()

