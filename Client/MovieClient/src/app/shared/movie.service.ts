import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { HttpClient } from "@angular/common/http";
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly rootURL = "https://localhost:44382/api/Movie";
  searchResult: Movie;

  constructor(private http:HttpClient) { 
    this.searchResult = new Movie();
    this.searchResult.Title = "";
    this.searchResult.Overview = "";
  }

  searchMovie(name:string){
    let temp = this.http.get<Movie>(this.rootURL + "/search/" + name).pipe(
      map(data => new Movie().deserialize(data)),
      catchError(() => throwError('Error deserializing data'))
    );
    return temp;
    // this.movie.Title = name;
    // this.movie.Overview = "Overview of " + name;
  }

}
