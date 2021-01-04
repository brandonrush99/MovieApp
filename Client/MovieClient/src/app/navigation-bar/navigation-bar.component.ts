import { Component, OnInit } from '@angular/core';
import { MovieService } from "../shared/movie.service";
import {Router} from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { HomeComponent } from '../home/home.component';
import { FavoriteMoviesComponent } from '../favorite-movies/favorite-movies.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  searchText = "";

  constructor(private searchComponent:SearchComponent, private homeComponent:HomeComponent, private favoriteComponent: FavoriteMoviesComponent) {}

  ngOnInit(): void {
    this.topRated();
  }

  search(){
    this.searchComponent.search(this.searchText);
  }

  topRated(){
    this.homeComponent.getTopRatedMovie();
  }

  favoriteMovies(){
    this.favoriteComponent.getFavoriteMovies();
  }

}
