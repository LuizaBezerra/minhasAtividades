function verificar() {
   var dataH = new Date();
   var anoAt = dataH.getFullYear();
   var anoFm = document.getElementById('anoNasc');
   var resul = document.querySelector('div#exibeMsg');

   if(anoFm.value.length == 0 || anoFm.value > anoAt){
       alert('Verifique os dados e tente novamente!');
   }else{
       var sex = document.getElementsByName('sexo');
       var idade = anoAt -  Number(anoFm.value);
       var img = document.createElement("img");
       img.setAttribute('id','foto');
       var genero='';
       if(sex[0].checked){
           genero ='Homem'
            if(idade >=0 && idade <= 15){
                img.setAttribute('src','bH.png');
            }else if(idade <= 25){
                img.setAttribute('src','tH.png');
            }else if(idade <= 40){
                img.setAttribute('src','aH.png');
            }else{
                img.setAttribute('src','vH.png');
            }
        }else{
            genero ='Mulher';
            if(idade >= 0 && idade <= 15){
                img.setAttribute('src','bM.png');
            }else if(idade <= 25){
                img.setAttribute('src','tM.png');
            }else if(idade <= 40){
                img.setAttribute('src','aM.png');
            }else{
                img.setAttribute('src','vM.png');
            }
        }
        resul.style.textAlign = 'center';
        resul.innerHTML = `${genero} com ${idade} anos!`;
        resul.appendChild(img);
   }
};