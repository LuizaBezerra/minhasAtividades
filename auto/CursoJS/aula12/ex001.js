//  CONDIÇÃO ANINHADA - IF/ELSE IF  //

//var idade = 18;
/*if(idade < 16){
    console.log('//-------------------------------//');
    console.log(`   Sua idade é ${idade}, não vota!`)
    console.log('//-------------------------------//');
}else if(idade < 18 ){
    console.log('//-------------------------------//');
    console.log(`   Sua idade é ${idade}, voto opcional!`);
    console.log('//-------------------------------//');
}else if(idade >= 65){
    console.log('//-------------------------------//');
    console.log(`   Sua idade é ${idade}, voto opcional!`);
    console.log('//-------------------------------//');
}else{
    console.log('//-------------------------------//');
    console.log(`   Sua idade é ${idade}, voto obrigatório!`)
    console.log('//-------------------------------//');

}*/

//var horaSys   = new Date();
//var horaAtual = horaSys.getHours();

//if(horaAtual < 12){
//    console.log('//-------------------------------//');
//    console.log(`   Agora são exatamente ${horaAtual} horas, BOM DIA!`)
//    console.log('//-------------------------------//');
//}else if(horaAtual >= 12 && horaAtual < 18){
//    console.log('//-------------------------------//');
//    console.log(`   Agora são exatamente ${horaAtual} horas, BOA TARDE!`)
//    console.log('//-------------------------------//');
//}else if(horaAtual >= 18){
//    console.log('//-------------------------------//');
//    console.log(`   Agora são exatamente ${horaAtual} horas, BOA NOITE!`)
//    console.log('//-------------------------------//');
//}

//----------------------------------------------------------//

// CONDIÇÃO MULTIPLA SWITCH CASE//

var diaS = new Date();
var dia = diaS.getDay();
switch (dia) {
    case 0:
        console.log('//-------------------------------//');
        console.log(`   Hoje é Domingo!`)
        console.log('//-------------------------------//');
        break;
    case 1:
        console.log('//-------------------------------//');
        console.log(`   Hoje é Segunda!`)
        console.log('//-------------------------------//');        
        break;
    case 2:
        console.log('//-------------------------------//');
        console.log(`   Hoje é Terça!`)
        console.log('//-------------------------------//');        
        break;
    case 3:
        console.log('//-------------------------------//');
        console.log(`   Hoje é Quarta!`)
        console.log('//-------------------------------//');
        break;
    case 4:
        console.log('//-------------------------------//');
        console.log(`   Hoje é Quinta!`)
        console.log('//-------------------------------//');
        break;
    case 5: 
        console.log('//-------------------------------//');
        console.log(`   Hoje é Sexta!`)
        console.log('//-------------------------------//');break;
    case 6: 
        console.log('//-------------------------------//');
        console.log(`   Hoje é Sábado!`)
        console.log('//-------------------------------//');
        break;
    
    default:
            console.log('//-------------------------------//');
            console.log("ERRO - Dia inválido!")
            console.log('//-------------------------------//');
        break;
}