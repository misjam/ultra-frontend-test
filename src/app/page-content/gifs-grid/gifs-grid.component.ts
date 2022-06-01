import { Component, Input, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.scss']
})
export class GifsGridComponent implements OnInit {
  @Input() gifs: any;

  constructor(
    public giphyService: GiphyService
  ) { }

  ngOnChanges() {
    console.log(this.gifs);
  }

  ngOnInit(): void {
  }



}
