import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-search-and-navigation',
  templateUrl: './search-and-navigation.component.html',
  styleUrls: ['./search-and-navigation.component.scss']
})
export class SearchAndNavigationComponent implements OnInit {
  searchCtrl = new FormControl('');
  searchQueries: string[] = [];
  page = 1;

  constructor(
    public giphyService: GiphyService
  ) { }

  ngOnInit(): void {

  }

  removeQuery(query: string) {
    this.searchQueries = this.searchQueries.filter(q => q !== query);
    this.giphyService.searchData(this.searchQueries);
  }

  addSearchQuery() {
    if (this.searchCtrl.value && !this.searchQueries.some(q => q === this.searchCtrl.value)) {
      this.searchQueries.push(this.searchCtrl.value);
      this.giphyService.searchData(this.searchQueries);
    }
    this.searchCtrl.setValue('');
  }
  onPageChange(event: any) {
    console.log(event)
    this.giphyService.choosePage(event);
  }

}