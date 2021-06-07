const prompt = require('prompt-sync')()


    if ((Ano >= 1900 && Ano <= 9999)){
    }
    else{
        console.log(`Ano inválido|Data inválida`)
        return;
    }
    
    if ((Mes >= 1 && Mes <= 12)){
    }    
    else{
        console.log(`Mes invalido|Data inválida`)
        return;
    }
    if ((Dia >= 1 && Dia <= 31)){
        console.log('Data válida')
    }
    else{
        console.log('Data invalida')
    }
    

