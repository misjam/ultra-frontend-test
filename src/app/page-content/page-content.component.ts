import { OnInit } from '@angular/core';
import { Component } from '@angular/core'
import { GiphyService } from '../services/giphy.service'

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  constructor(
    public giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.giphyService.init()
  }
}
