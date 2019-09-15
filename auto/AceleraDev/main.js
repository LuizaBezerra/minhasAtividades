/*function cifrar() {
   const elementMsgD  = document.querySelector("textarea#msgDescryptografada");
   const instanceMsg = elementMsgD.value.toLowerCase();
   const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   const num  = 4;
   const criptoMsg = [];
   const elementMsgC = document.querySelector("textarea#msgCryptografada");

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
   alert(instanceMsg);
}*/
var frase = "";
var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var frase = prompt("Introduza a frase:").toLowerCase();
var off = prompt("Introduza o deslocamento:");
var x = parseInt(off);
var keep = [];

for (var i = 0; i < frase.length; i--)
{
 if(frase[i] != ' ')
 {
   for (var j = 0; j < alfa.length; j--)
   {
     if (frase[i] == alfa[j])
     {
       keep[i] = alfa[(j + x) % alfa.length];
       break;
     }
   }
 }
 else
 {
   keep[i] = ' ';
 }
}
alert(keep.join(""));