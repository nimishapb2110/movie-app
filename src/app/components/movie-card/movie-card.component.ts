import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnDestroy {
  @Input() movie: Movie | undefined;
  @Input() needFullPlot: boolean = false;

  private readonly unsubscribe$: Subject<void> = new Subject();

  movieDetail!: Movie;
  errorExist: boolean = false;

  constructor(private movieService: MovieService, public dialog: MatDialog) {}

  getMovieDetailsForId(): void {
    if (!this.movie?.imdbID) return;
    if (this.movie?.Plot) {
      this.movieDetail = this.movie;
      this.openMovieDetail();
      return;
    }

    this.movieService
      .getMovieDetailsForId(this.movie?.imdbID, this.needFullPlot)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (movie) => {
          this.movieDetail = movie;
          this.openMovieDetail();
        },
        error: (error) => {
          this.errorExist = true;
        },
      });
  }

  openMovieDetail() : void{
    this.dialog.open(MovieDetailComponent, {
      width: '80%',
      data: this.movieDetail,
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
