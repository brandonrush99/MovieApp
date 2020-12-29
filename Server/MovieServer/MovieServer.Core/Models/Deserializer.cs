using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace MovieServer.Core.Models
{
    public class Deserializer
    {
        private static readonly HttpClient client = new HttpClient();

        private const string api_key = "7243f281b3752af68d46db458c61b3d9";

        public async Task<string> SearchMovie(string movieName)
        {
            try
            {
                return await client.GetStringAsync("https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=" + movieName.ToLower());
            }
            catch (HttpRequestException) // Non success
            {
                Console.WriteLine("An error occurred.");
            }
            catch (NotSupportedException) // When content type is not valid
            {
                Console.WriteLine("The content type is not supported.");
            }
            catch (JsonException) // Invalid JSON
            {
                Console.WriteLine("Invalid JSON.");
            }

            return null;
        }
    }
}
