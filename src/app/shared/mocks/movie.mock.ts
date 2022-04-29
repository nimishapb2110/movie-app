import { Movie } from '../models/movie.model';

export const movieMock: Movie = {
  Title: 'Beta Test',
  Year: '2016',
  imdbID: 'tt4244162',
  Type: 'movie',
  Plot: 'Sample plot about the movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg',
};

export const movieMockWithoutPlot: Movie = {
  Title: 'Beta Test',
  Year: '2016',
  imdbID: 'tt4244162',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg',
};
