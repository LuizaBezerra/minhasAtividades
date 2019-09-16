using System;

namespace aulaLogica
{
    class Program
    {
        static void Main(string[] args)
        {
            float n1,n2,n3,media;
            string res;
            Console.WriteLine("Digite a 1º nota");
            n1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Digite a 2º nota");
            n2 = float.Parse(Console.ReadLine());
            Console.WriteLine("Digite a 3º nota");
            n3 = float.Parse(Console.ReadLine());
            media = (n1+n2+n3)/3;
            if(media >= 6){
                res = "aprovado";
            }
            else if(media < 6 & media >= 4){
                res = "recuperação";
            }
            else{
                res="reprovado";
            }
            Console.WriteLine($"Este aluno possui média: {media} portanto sua situação é {res}.");
        }
    }
}
