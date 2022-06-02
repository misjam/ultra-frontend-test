import { Component, Input } from '@angular/core'
import { GiphyService } from 'src/app/services/giphy.service'

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.scss']
})
export class GifsGridComponent {
  @Input() gifs: any

  constructor(
    public giphyService: GiphyService
  ) { }

  onPageChange(event: any) {
    this.giphyService.choosePage(event)
  }
}
