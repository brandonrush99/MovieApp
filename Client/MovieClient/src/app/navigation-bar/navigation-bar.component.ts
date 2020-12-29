import { Component, OnInit } from '@angular/core';
import { MovieService } from "../shared/movie.service";
import {Router} from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  searchText = "";

  constructor(private searchComponent:SearchComponent) {}

  ngOnInit(): void {
  }

  search(){
    this.searchComponent.search(this.searchText);
  }

}
