using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieServer.Core.Models;
using MovieServer.Infrastructure.Data;
using System.Net.Http;
using System.Net.Http.Json;
using Newtonsoft.Json;
using System.Collections.ObjectModel;

namespace MovieServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private static readonly HttpClient client = new HttpClient();

        //private const string api_key = "7243f281b3752af68d46db458c61b3d9";

        //private readonly Deserializer deserializer = new Deserializer();

        public MovieController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Movie/search/movieName
        //[HttpGet("search/{movieName}")]
        //public async Task<string> SearchMovie(string movieName)
        //{
        //    var popularJson = await deserializer.SearchMovie(movieName);
        //    dynamic jsonConverted = JsonConvert.DeserializeObject(popularJson);
        //    int id = jsonConverted.results[0].id;
        //    string title = jsonConverted.results[0].title;
        //    string overview = jsonConverted.results[0].overview;
        //    string poster_path = jsonConverted.results[0].poster_path;
        //    Movie movie = new Movie();
        //    movie.Id = id;
        //    movie.Title = title;
        //    movie.Overview = overview;
        //    movie.Poster_Path = poster_path;
        //    //string movieObject = "{ \"id\":1, \"title\":" + title + ", \"overview\":" + overview +"}";
        //    var movieJson = JsonConvert.SerializeObject(movie);
        //    return movieJson;
        //    //seriesCollection = JsonConvert.DeserializeObject<ObservableCollection<SeriesModel>>(popularJson);
        //}

        // GET: api/Movie/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            var movie = await _context.Movie.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        // GET: api/Movie/all
        [HttpGet("all")]
        public async Task<ActionResult<List<Movie>>> GetMovies()
        {
            var movies = _context.Movie.ToList(); 

            return movies;
        }
        
        // PUT: api/Movie/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, Movie movie)
        {
            if (id != movie.Id)
            {
                return BadRequest();
            }

            _context.Entry(movie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movie
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {
            _context.Movie.Add(movie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovie", new { id = movie.Id }, movie);
        }

        // DELETE: api/Movie/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Movie>> DeleteMovie(int id)
        {
            var movie = await _context.Movie.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movie.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;
        }

        private bool MovieExists(int id)
        {
            return _context.Movie.Any(e => e.Id == id);
        }
    }
}
