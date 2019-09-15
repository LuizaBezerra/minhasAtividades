
function carregar(){
    var msg = document.getElementById('msg');
    var foto = document.getElementById('exibeImg');
    var data =  new Date();
    var hora = 22 //data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`;
    if(hora >= 0 && hora < 12){
        foto.src = 'manha.jpg';
        document.body.style.backgroundColor = 'rgb(231, 222, 141)';
    }else if(hora >= 12 && hora < 18){  
        foto.src = 'tarde.jpg';
        document.body.style.backgroundColor = 'rgb(121, 172, 187)'; 
    }else{
        foto.src ='noite.jpg';
        document.body.style.backgroundColor = 'rgb(19, 24, 31)';
    }
};