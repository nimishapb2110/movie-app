import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  readMore: boolean = false;
  longPlot: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<MovieDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
  ) { }

  ngOnInit(): void {
    this.longPlot = this.data?.Plot || '';
    this.readMore = this.longPlot.length > 200;
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
