using System;

namespace aulaSwitch
{
    class Program
    {
        static void Main(string[] args)
        {
            string placa;
            int final;
            Console.Write("Digite a placa do carro:");
            placa = Console.ReadLine();
            int caracter = placa.Length;
            final = Convert.ToInt32(placa.Substring(caracter-1));
            switch(final){
                case 1:
                    Console.WriteLine("SEGUNDA");
                break;
                case 2:
                    Console.WriteLine("SEGUNDA");
                break;
                case 3:
                    Console.WriteLine("TERÇA");
                break;
                case 4:
                    Console.WriteLine("TERÇA");
                break;
                case 5:
                    Console.WriteLine("QUARTA");
                break;
                case 6:
                    Console.WriteLine("QUARTA");
                break;
                case 7:
                    Console.WriteLine("QUINTA");
                break;
                case 8:
                    Console.WriteLine("QUINTA");
                break;
                case 9:
                    Console.WriteLine("SEXTA");
                break;
                case 0:
                    Console.WriteLine("SEXTA");
                break;
                default:
                    Console.WriteLine("Placa inválida");
                break;
            }
        }
    }
}
