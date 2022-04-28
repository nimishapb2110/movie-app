import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";
import { Movie, Search } from "../models/movie.model";

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({ providedIn: "root" })
export class MovieService {

    constructor(private http: HttpClient) { }

    getTopMoviesForSearch(searchTitle: string) {
        return this.http
            .get<Search>(`${API_URL}?s=${searchTitle}&apiKey=${API_KEY}`)
            .pipe(map(response => response.Search))
    }

    getMovieDetailsForId(id: string, needFullPlot: boolean = false) {
        return this.http
            .get<Movie>(`${API_URL}?i=${id}${needFullPlot ? `&plot=full` : ``}&apikey=${API_KEY}`)
    }

}