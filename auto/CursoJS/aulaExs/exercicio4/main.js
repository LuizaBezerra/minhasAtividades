function tabuada(){
    const num = document.querySelector("input#txtN").value;
    const tab = document.querySelector("select#sTab");
    let x = 0;
   if(num ==0){
       alert("Preencha o número!");
   }else{
        tab.innerHTML = String.empty;
        while(x <= 10){
            const item = document.createElement("option"); 
            item.text = `${num} x ${x} = ${num * x}`;
            item.value = `tab${x}`
            tab.appendChild(item);
            x++;
        }
   }
}