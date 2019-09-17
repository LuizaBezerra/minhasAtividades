using System;

namespace exerciciosSwitch
{
    class Program
    {
        static void Main(string[] args)
        { 
            Console.WriteLine("Digite seu peso");
            double peso = double.Parse(Console.ReadLine());
            Console.WriteLine("Escolha um planeta e digite o número referente:\n 1-Mercúrio\n 2-Vênus \n 3-Marte \n 4-Júpter \n 5-Saturno \n 6-Urano");
            int planeta = int.Parse(Console.ReadLine());
            double calc;
            switch(planeta){
                case 1:
                    calc = (peso/10)*0.37;
                    Console.Write($"Seu peso em Mercúrio é {calc}");
                break;
                case 2:
                    calc = (peso/10)*0.88;
                    Console.Write($"Seu peso em Vênus é {calc}");
                break;
                case 3:
                    calc = (peso/10)*0.38;
                    Console.Write($"Seu peso em Marte é {calc}");
                break;
                case 4:
                    calc = (peso/10)*2.64;
                    Console.Write($"Seu peso em Júpiter é {calc}");
                break;
                case 5:
                    calc = (peso/10)*1.15;
                    Console.Write($"Seu peso em Saturno é {calc}");
                break;
                case 6:
                    calc = (peso/10)*1.17;
                    Console.Write($"Seu peso em Urano é {calc}");
                break;
                default:
                    Console.Write("Escolha um planeta dentre as opções listada.");
                break;
            }           
        }
    }
}