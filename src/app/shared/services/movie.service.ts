import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, Search } from '../models/movie.model';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopMoviesForSearch(searchTitle: string): Observable<Movie[]> {
    return this.http
      .get<Search>(`${API_URL}?s=${searchTitle}&apiKey=${API_KEY}`)
      .pipe(map((response) => response.Search));
  }

  getMovieDetailsForId(
    id: string,
    needFullPlot: boolean = false
  ): Observable<Movie> {
    return this.http.get<Movie>(
      `${API_URL}?i=${id}${needFullPlot ? `&plot=full` : ``}&apikey=${API_KEY}`
    );
  }
}
