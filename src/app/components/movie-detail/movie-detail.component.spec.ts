import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { movieMock } from 'src/app/shared/mocks/movie.mock';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input data has movie object', () => {
    beforeEach(() => {
      component.data = movieMock;
      fixture.detectChanges()
    });


    it('should have readMore flag as true when the plot has characters exceeding 200', () => {
      expect(component.data?.Plot?.length).toBeLessThan(200);
      expect(component.readMore).toBeFalse;

      component.data.Plot = "Champion gamer Max Troy discovers events in a new video game are being mirrored in the real world, and must join forces with the game's protagonist, Orson Creed, to unravel the conspiracy before the game's sinister plot overwhelms";

      expect(component.data.Plot.length).toBeGreaterThan(200);

      component.ngOnInit();

      expect(component.readMore).toBeTrue;
    });
  });
});
