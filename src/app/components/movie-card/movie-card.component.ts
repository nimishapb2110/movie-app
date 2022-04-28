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

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  getMovieDetailsForId(movieId: string | undefined) {
    console.log('Selected movie: ', this.needFullPlot);
    if (!movieId) return;
    this.movieService.getMovieDetailsForId(movieId, this.needFullPlot).subscribe(movie => {
      this.movieDetail = movie;
      const dialogRef = this.dialog.open(MovieDetailComponent, {
        width: '80%',
        data: this.movieDetail,
      });
    });
  }

}
