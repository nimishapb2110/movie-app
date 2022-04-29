import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalidFlag true when a string of less than 3 characters in input', () => {
    const submitButton = fixture.debugElement.query(
      By.css('.search-bar__submit')
    );
    const searchText = fixture.debugElement.query(By.css('.search-bar__input'));
    searchText.nativeElement.value = 'ab';
    expect(component.inputInvalid).toBeFalse;
    submitButton.triggerEventHandler('click', null);
    expect(component.inputInvalid).toBeTrue;
  });

  it('should have invalidFlag false when a string of more than 2 characters in input', () => {
    const submitButton = fixture.debugElement.query(
      By.css('.search-bar__submit')
    );
    const searchText = fixture.debugElement.query(By.css('.search-bar__input'));
    searchText.nativeElement.value = 'abc';
    submitButton.triggerEventHandler('click', null);
    expect(component.inputInvalid).toBeFalse;
  });
});
