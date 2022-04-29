import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private readonly unsubscribe$: Subject<void> = new Subject();

  searchResult: Movie[] = [];
  fullPlot: boolean = false;
  errorExist: boolean = false;

  constructor(private movieService: MovieService) {}

  searchMovie(searchQuery: string) {
    this.movieService
      .getTopMoviesForSearch(searchQuery)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (movies) => {
          this.searchResult = movies;
          if (!movies) {
            this.errorExist = true;
            return;
          }
          this.errorExist = false;
        },
        error: () => {
          this.errorExist = true;
        },
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
