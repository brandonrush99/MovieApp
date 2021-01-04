using System;
using System.Collections.Generic;
using System.Text;

namespace MovieServer.Core.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Overview { get; set; }
        public string Poster_Path { get; set; }

    }
}
