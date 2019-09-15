using System;

namespace teste
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal pass = 4.30M;
            Console.WriteLine("Quantos pasageiros entraram no ônibus?");
            int qtd = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("O valor total arrecadado é de " + (qtd*pass));
        }
    }
}
