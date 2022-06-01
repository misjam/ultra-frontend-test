import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor(
    private giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.giphyService.giphs$.subscribe(r => {
      console.log(r);
    })
  }

}
