import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() placeholder: string = '';
  @Output() submitEvent = new EventEmitter<string>();

  faSearchIcon = faSearch;
  inputInvalid: boolean = false;

  onSubmitClick(searchQuery: string) {
    if (searchQuery.length < 3) {
      this.inputInvalid = true;
      return;
    }
    this.inputInvalid = false;
    this.submitEvent.emit(searchQuery);
  }
}
