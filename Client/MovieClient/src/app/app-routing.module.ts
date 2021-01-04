import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'favorite', component: FavoriteMoviesComponent},
  { path: 'movie', component: MovieComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
