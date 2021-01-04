import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../shared/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  movieIdToDelete = 0;
  faTrash = faTrash;
  readonly imageSize:string = "/w92";
  constructor(public movieService: MovieService, private toastr: ToastrService, private route:Router) { }

  ngOnInit(): void {
  }

  getFavoriteMovies(){
    this.movieService.getMoviesFromServer().toPromise().then(
      success => {
        this.movieService.favoriteMovies = success,
        error => console.log(error)
      }
    )
  }

  removeMovieFromFavorites(id:number){
    this.movieService.deleteMovieFromFavorites(id).subscribe(
      res => {
        this.toastr.success("Sucessfully removed " + res.Title + " from favorite movies!", "MovieApp");
        for (let i = 0; i < this.movieService.favoriteMovies.length; i++) {
          if (this.movieService.favoriteMovies[i].Id == id)
          {
            this.movieService.favoriteMovies.splice(i,1);
            break;
          }
        }
        
      },
      err => {
        console.log(err);
        this.toastr.error("Failed to remove movie");
      }
    )
  }

  switchToMovie(movie:Movie){
    this.movieService.searchResult = movie;
    this.route.navigate(['/movie']);
  }

}
