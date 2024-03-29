import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieComponent } from "../movie/movie.component";
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public title:string;
  public overview:string;

  constructor(public movie:MovieComponent, private route:Router) {
  }

  ngOnInit(): void {
  }

  search(searchText:string){
    this.movie.movieService.searchMovie(searchText).toPromise().then(
      success => {
        this.movie.movieService.searchResult = success,
        error => console.log(error)
      }
      
    );
    this.route.navigate(['/search']);
  }

}
