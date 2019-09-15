document.writeln("QUESTÃO 1");
var tot = 300.00;
var qtd = 8;
document.writeln(`O gasto médio de Isabel é de ${Number(tot)/ Number(qtd)}`);

document.writeln("QUESTÃO 2");
var prod = prompt("Digite o valor do produto");
document.writeln(`Valor com desconto ${prod - (prod *10/100)}`);

document.writeln("QUESTÃO 3");
var combo = prompt("Digite o valor do combo.");
var qtd =  prompt("Digite a quantidade de combos.");
document.writeln(`O valor total desta compra é  ${Number(combo) * Number(qtd)}`);

document.writeln("QUESTÃO 4");
var nota1 = prompt("Digite a primeira nota.");
var nota2 = prompt("Digite a segunda nota." );
var nota3 = prompt("Digite a terceira nota.");
var media = Number(nota1) + Number(nota2) + Number(nota3)/3
document.writeln(`A média é ${media}`);

document.writeln("QUESTÃO 5");
var tot = prompt("Digite o valor total da compra.");
if(tot >= 200){
  document.writeln(`O valor com desconto de 15% é ${tot - (tot*15/100)}`);
}else{
  document.writeln(`Que pena! você não participará desta promoção!`);
}