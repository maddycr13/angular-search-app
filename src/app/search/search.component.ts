import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(private _searchService: SearchService) { }
  ngOnInit() {
    this.queryField.valueChanges
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap((query) =>  this._searchService.search(query)) // call search method
    .subscribe( result => { if (result.status === 400) { return; } else {   this.results = result.json().artists.items; }
  });
  }
}