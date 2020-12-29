import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from "../shared/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  searchResult:MovieService;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getTitle(){
    return this.movieService.searchResult.Title;
  }
  getOverview(){
    return this.movieService.searchResult.Overview;
  }
  setTitle(title:string){
    this.movieService.searchResult.Title = title;
  }
  setOverview(overview:string){
    this.movieService.searchResult.Overview = overview;
  }


}
