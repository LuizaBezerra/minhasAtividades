//const elementMsgD  = 'desafio da codenation aceleradev'//document.querySelector("textarea#msgDescryptografada");
const instanceMsg =  'desafio da codenation aceleradev'// elementMsgD.value.toLowerCase();
const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const num  = 4;
const criptoMsg = [];
//const elementMsgC = document.querySelector("textarea#msgCryptografada");

for(const x = 0; instanceMsg.length; x++){
    if(instanceMsg[x] != ' '){
        for(const y = 0; y < alfa.length; y++){
            if(instanceMsg[x] == alfa[y]){
                 criptoMsg[x] = alfa[(j+num) % alfa.length];
                 break;
            }
        }
    }else{
         criptoMsg[x] = "";
    }
}
const instanceMsgC = criptoMsg.join("");
console.log(instanceMsgC)