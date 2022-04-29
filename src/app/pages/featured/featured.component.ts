import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FEATURED_MOVIES } from '../../shared/constants/movie-constants';
import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();

  featuredMovies: Movie[] = [];
  errorExist: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    FEATURED_MOVIES.forEach((movieId) => {
      this.movieService
        .getMovieDetailsForId(movieId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (movie) => {
            this.featuredMovies.push(movie);
          },
          error: () => {
            this.errorExist = true;
          },
        });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
