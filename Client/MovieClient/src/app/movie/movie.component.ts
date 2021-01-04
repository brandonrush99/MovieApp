import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from "../shared/movie.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  readonly imageSize:string = "/w300";

  constructor(public movieService: MovieService, private toastr: ToastrService) { }

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
  addMovieToFavorites(){
    this.movieService.postMovie().subscribe(
      success => {
        console.log("Successfully added movie to favorites: " + success);
        this.toastr.success("Sucessfully added movie","MovieApp");

      },
      error => {
        console.log(error);
        this.toastr.error("Failed to add movie to favorites: " + error,"MovieApp");
      }
    )
  }


}
