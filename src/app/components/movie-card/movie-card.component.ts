import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: Movie | undefined;
  @Input() needFullPlot: boolean = false;

  movieDetail!: Movie;
  errorExist: boolean = false;

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  getMovieDetailsForId() {
    if (!this.movie?.imdbID) return;
    if (this.movie?.Plot) {
      this.movieDetail = this.movie;
      this.openMovieDetail();
    }
    else {
      this.movieService.getMovieDetailsForId(this.movie?.imdbID, this.needFullPlot).subscribe({
        next: movie => {
          this.movieDetail = movie;
          this.openMovieDetail();
        },
        error: error => {
          this.errorExist = true;
        }
      });
    }
  }

  openMovieDetail() {
    this.dialog.open(MovieDetailComponent, {
      width: '80%',
      data: this.movieDetail,
    });
  }

}
