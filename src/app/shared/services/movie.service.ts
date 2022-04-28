import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Movie, Search } from "../models/movie.model";

@Injectable({ providedIn: "root" })
export class MovieService {

    constructor(private http: HttpClient) { }

    getTopMoviesForSearch(searchTitle: string) {
        return this.http
            .get<Search>(`http://www.omdbapi.com/?s=${searchTitle}&apiKey=6c3a2d45`)
            .pipe(map(response => response.Search))
            //TODO - error case
    }

    getMovieDetailsForId(id: string, needFullPlot: boolean = false) {
        return this.http
            .get<Movie>(`http://www.omdbapi.com/?i=${id}${needFullPlot ? `&plot=full` : ``}&apikey=6c3a2d45`)
            //TODO - error case
    }

}