import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieService } from '../shared/services/movie.service';
import * as Rx from 'rxjs';

import { SearchComponent } from './search.component';
import { movieMock } from '../shared/mocks/movie.mock';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [SearchComponent],
    imports: [HttpClientTestingModule, MatDialogModule],
    providers: [MovieService]
  }).compileComponents();

  fixture = TestBed.createComponent(SearchComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getTopMoviesForSearch and get response as array', fakeAsync(() => {
    const movieService = fixture.debugElement.injector.get(MovieService);

    let movieServiceSpy = spyOn(movieService, "getTopMoviesForSearch").and.callFake(() => {
      return Rx.of([movieMock]).pipe(Rx.delay(1000));
    });

    expect(component.searchResult.length).toBe(0);

    component.searchMovie('test');
    tick(1000);

    expect(component.searchResult.length).toBeGreaterThan(0);
  }))

});
