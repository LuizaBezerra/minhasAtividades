function contar(){
    let ini = document.querySelector("input#ini");
    let fim = document.querySelector("input#fim");
    let pas = document.querySelector("input#pas");
    let res = document.querySelector("div#exibeMsg");

    if(ini.value.length ==0 || fim.value.length == 0 || pas.value.length ==0){
        res.innerHTML = "Preencha todos os campos corretamente!";
    }else{
        res.innerHTML = 'Contantdo: <br>';
        let i = Number(ini.value);
        let f  = Number(fim.value);
        let p  = Number(pas.value);
        if(p<=0){
            alert("Considerando passo 1")
            p=1
        }
        if(i<f){
            for(var c=i; c<=f; c+=p){
                res.innerHTML += ` \u{1F499} ${c} <br>`;
            }
        }else{
            for(var c=i; c>=f; c-=p){
                res.innerHTML +=` \u{1F449} ${c} <br>`;
            }
        }
        res.innerHTML +=` \u{1F6A9} Fim! \u{1F6A9}`;
    }
  }