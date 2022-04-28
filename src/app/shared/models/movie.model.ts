export interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Released?: string;
    Type: string;
    Year: string;
    Rated?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Awards?: string;
}

export interface Search {
    Search: Movie[],
    totalResults: Number,
    Response: Boolean
}