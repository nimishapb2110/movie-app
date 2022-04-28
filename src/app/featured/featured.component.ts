import { Component, OnInit } from '@angular/core';
import { FEATURED_MOVIES } from '../shared/constants/movie-constants';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featuredMovies: Movie[] = [];
  errorExist: boolean = false;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    FEATURED_MOVIES.forEach(movieId => {
      this.movieService.getMovieDetailsForId(movieId).subscribe({next: movie => {
        this.featuredMovies.push(movie);
      },
      error: error => {
        this.errorExist =true;
      }});
    });
  }


}
