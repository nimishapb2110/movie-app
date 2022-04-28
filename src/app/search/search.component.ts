import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchResult: Movie[] = [];
  fullPlot: boolean = false;
  errorExist: boolean = false;

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  searchMovie(searchQuery: string) {
    this.movieService.getTopMoviesForSearch(searchQuery).subscribe({
      next: (movies) => {
        this.searchResult = movies;
        if (!movies) {
          this.errorExist = true;
          return;
        }
        this.errorExist = false;
      },
      error: (error) => {
        this.errorExist = true;
      }
    }
    )
  }
}
