import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { HttpClient } from "@angular/common/http";
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly apiKey = "7243f281b3752af68d46db458c61b3d9";
  readonly searchURL = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey + "&query=";
  readonly topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + this.apiKey + "&language=en-US&page=1";
  readonly imageBaseURL:string = "http://image.tmdb.org/t/p";
  readonly serverBaseURL = "https://localhost:44382/api/Movie";

  searchResult: Movie;
  favoriteMovies: Movie[];

  constructor(private http:HttpClient) { 
    this.searchResult = new Movie();
    this.searchResult.Title = "";
    this.searchResult.Overview = "";
    this.searchResult.Poster_Path = "";

    this.favoriteMovies = [];
  }

  searchMovie(name:string){
    let temp = this.http.get<Movie>(this.searchURL + name).pipe(
      map(data => new Movie().deserialize(data)),
      catchError(() => throwError('Error deserializing data'))
    );
    return temp;
  }

  postMovie(){
    this.getFavoriteMovies();
    if (this.movieExists() == false)
    {
      let temp = new Movie();
      temp.Title = this.searchResult.Title;
      temp.Overview = this.searchResult.Overview;
      temp.Poster_Path = this.searchResult.Poster_Path;
      return this.http.post(this.serverBaseURL, temp);
    }
    else
    {
      return throwError("Movie already exists in favorites");
    }
    
  }

  getTopRatedMovie(){
    return this.http.get<Movie>(this.topRatedURL).pipe(
      map(data => new Movie().deserialize(data)),
      catchError(() => throwError('Error deserializing data'))
    );
  }

  deleteMovieFromFavorites(id:number){
    return this.http.delete<Movie>(this.serverBaseURL + "/" + id).pipe(
      map(data => new Movie().deserializeFromServer(data)),
      catchError(() => throwError('Error deserializing data'))
    );
  }

  getImageUrl(imageSize:string, poster_path:string){
    return this.imageBaseURL + imageSize + poster_path;
  }

  

  createMovieArray(input: any){
    let counter: number = 0;
    let movies = [];
    try {
      for (let i = 0; i < input.length; i++) {
        movies[i] = new Movie().deserializeFromServer(input[i]);
      }
    } catch (error) {
      console.log(error);
    }
    return movies;
  }

  getMoviesFromServer(){
    let temp = this.http.get<Movie[]>(this.serverBaseURL + "/all").pipe(
      map(data => this.createMovieArray(data)),
      catchError(() => throwError('Error creating movie array'))
    );
    return temp;
  }

   getFavoriteMovies(){
    this.getMoviesFromServer().toPromise().then(
      success => {
        this.favoriteMovies = success,
        error => console.log(error)
      }
    )
    
  }

  movieExists(){
    debugger;
    for (let i = 0; i < this.favoriteMovies.length; i++)
    {
      if (this.favoriteMovies[i].Title == this.searchResult.Title)
      {
        return true;
      }
    }
    return false;
  }

}
