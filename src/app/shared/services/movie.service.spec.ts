import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';
import { movieMock } from '../mocks/movie.mock';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    movieService = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should return the movie array', async () => {
    let movieServiceMock = spyOn(
      movieService,
      'getTopMoviesForSearch'
    ).and.callFake(() => {
      return Rx.of([movieMock]).pipe(Rx.delay(1000));
    });

    movieService.getTopMoviesForSearch('test').subscribe((response: any) => {
      expect(response).toEqual(Rx.of([movieMock]));
    });
    expect(movieService.getTopMoviesForSearch).toHaveBeenCalled();
  });

  it('should return the movie details', async () => {
    let movieServiceMock = spyOn(
      movieService,
      'getMovieDetailsForId'
    ).and.callFake(() => {
      return Rx.of(movieMock).pipe(Rx.delay(1000));
    });

    movieService
      .getMovieDetailsForId('tt11347692')
      .subscribe((response: any) => {
        expect(response).toEqual(Rx.of(movieMock));
      });
    expect(movieService.getMovieDetailsForId).toHaveBeenCalled();
  });
});
