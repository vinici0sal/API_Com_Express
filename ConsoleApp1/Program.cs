using System;
using System.Globalization;
using RestSharp;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            double altura = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            int peso = int.Parse(Console.ReadLine());

            var cliente = new RestClient($"http://localhost:8080/?peso={peso}&altura={altura}");
            var requests = new RestRequest("", Method.Get);

            var response = cliente.Execute(requests);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                System.Console.WriteLine(response.Content);
                Console.ReadLine();
            }

            else
            {
                Console.WriteLine("Corrija os erros e tente novamente");
                Console.ReadLine();
            }

        }
    }
}