import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public movie:MovieComponent) { }

  ngOnInit(): void {
    
  }

  getTopRatedMovie(){
    this.movie.movieService.getTopRatedMovie().toPromise().then(
      success => {
        this.movie.movieService.searchResult = success,
        error => console.log(error)
      }
    );
  }

}
