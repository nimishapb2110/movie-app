import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() submitEvent = new EventEmitter<string>();

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick(searchQuery: string) {
    if (searchQuery.length < 3) return;
    this.submitEvent.emit(searchQuery);
  }

}
