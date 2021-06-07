const prompt = require('prompt-sync')()


function main(){
    console.log('Um programa que leia 3 números e os coloque em ordem crescente.')
    const n1 = Number(prompt('Primeiro número: '));
    const n2 = Number(prompt('Segundo número: '));
    const n3 = Number(prompt('Terceiro número: '));

    var ordenado = ordem_crescente(n1, n2, n3);
    
    console.log(ordenado);
}
    

function ordem_crescente(n1, n2, n3){
    var ordenado = "Lista Ordenada: ";

    if((n1 > n2) && (n1 > n3)){
        ordenado .= "${n1}";
        if (n2 > n3){
        ordenado .= "${n2}", "${n3}";
        } else (){
        ordenado .= "${n3}, ${n2}";
        }
        } 

    else if ((n2 > n1) && (n2 > n3)){
        ordenado .= "${n2}";
        if (n1 > n3){
        ordenado .= "${n1}, ${n3}";
        } else (){
        ordenado .= "${n3}, ${n1}";
        }
        }

    else {
        ordenado .= "${n3}";
        if (n2 > n1){
        ordenado .= "${n2}, ${n1}";
        } else(){
        ordenado .= "${n1}, ${n2}";
        }
        }
    
    return ordenado;

main() 
