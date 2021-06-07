const prompt = require('prompt-sync')()


function angulos_triangulo(){
    console.log('### De acordo com a questão, a soma dos ângulos internos de um triângulo somam 180 graus ###')

    const angulo_1 = Number(prompt('Digite o ângulo do triângulo 1: '));
    const angulo_2 = Number(prompt('Digite o ângulo do triângulo 2: '));
    const angulo_3 = Number(prompt('Digite o ângulo do triângulo 3: '));

    const soma_angulos = angulo_1 + angulo_2 + angulo_3

    if (soma_angulos === 180){
        console.log('É um triângulo.')
    }else{
        console.log('Não é um triângulo.')
    }

    angulos_triangulo()
    
    // Verificar a categoria de triângulos
    if (angulo_1 < 90 && angulo_2 < 90 && angulo_3 < 90){
        console.log('O triângulo é acutângulo.')
    }
    else if (angulo_1 === 90 || angulo_2 === 90 || angulo_3 === 90){
        console.log('O trângulo é retângulo.')
    }
    else if (angulo_1 > 90 || angulo_2 > 90 || angulo_3 > 90){
        console.log('O triângulo é obtusângulo.')
    }
    else
        console.log('Não existe triângulo com ângulo zero.')

}