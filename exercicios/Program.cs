using System;

namespace exercicios
{
    class Program
    {
        static void Main(string[] args)
        {
            int idade;
            Console.WriteLine("Digite sua idade");
            idade = Convert.ToInt32(Console.ReadLine());
            if(idade >18){
                Console.WriteLine($"Classificação: Livre e Apenas adultos");
            }
            else if(idade == 17 ){
                Console.WriteLine($"Classificação: Livre e Maduro");
            }
            else if(idade >= 13 && idade < 17 ){
                Console.WriteLine($"Classificação: Livre e Adolescente");
            }
            else if(idade >= 10 && idade < 13 ){
                Console.WriteLine($"Classificação: Livre e Infantil");
            }
            else{
                 Console.WriteLine($"Classificação: Livre.");
            }
            
        }
    }
}