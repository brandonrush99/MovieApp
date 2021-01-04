import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './shared/movie.service';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MovieComponent,
    SearchComponent,
    HomeComponent,
    FavoriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [MovieService, MovieComponent, SearchComponent, HomeComponent, FavoriteMoviesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
