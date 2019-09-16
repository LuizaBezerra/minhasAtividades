using System;

namespace aula2_3
{
    class Program
    {
        static void Main(string[] args)
        {
            bool entrada = false;
            int idade;
            string ret = "Entrada negada.";
            Console.Write("Informe sua idade: ");
            idade = Convert.ToInt32(Console.ReadLine());
            if(idade > 17)
                entrada = true;

            if(entrada == true)
                ret = "Entrada autorizada.";            
            Console.WriteLine(ret);
        }
    }
}