using System;
using System.Globalization;
using RestSharp;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            var cliente = new RestClient($"http://localhost:8080/ufs/1");
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