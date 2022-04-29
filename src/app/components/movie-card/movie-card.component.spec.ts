import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieCardComponent } from './movie-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { movieMock, movieMockWithoutPlot } from '../../shared/mocks/movie.mock';
import { MovieService } from 'src/app/shared/services/movie.service';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not open details dialog when imdbID does not exist', () => {
    expect(component.movie?.imdbID).toBeUndefined();
    const movieCardElement = fixture.debugElement.query(By.css('.movie-card'));
    movieCardElement.triggerEventHandler('click', null);
    const movieDetailElement = fixture.debugElement.query(
      By.css('.movie-detail')
    );
    expect(movieDetailElement).toBeNull();
  });

  it('should call openMovieDetail function when movie plot already available', fakeAsync(() => {
    expect(component.movie?.Plot).toBeUndefined();
    component.movie = movieMock;
    expect(component.movie?.Plot).not.toBeUndefined();
    const openMovieDetailFunction = spyOn(component, 'openMovieDetail');
    const movieCardElement = fixture.debugElement.query(By.css('.movie-card'));
    movieCardElement.triggerEventHandler('click', null);
    expect(openMovieDetailFunction).toHaveBeenCalled();
  }));

  it('should trigger service call getMovieDetailsForId when imdbID exist and Plot is undefined', () => {
    component.movie = movieMockWithoutPlot;
    expect(component.movie?.imdbID).not.toBeUndefined();
    expect(component.movie?.Plot).toBeUndefined();
    const movieCardElement = fixture.debugElement.query(By.css('.movie-card'));
    const movieService = fixture.debugElement.injector.get(MovieService);
    const movieServiceSpy = spyOn(
      movieService,
      'getMovieDetailsForId'
    ).and.callThrough();
    movieCardElement.triggerEventHandler('click', null);
    expect(movieService.getMovieDetailsForId).toHaveBeenCalled();
    expect(movieServiceSpy).toHaveBeenCalled();
  });
});
