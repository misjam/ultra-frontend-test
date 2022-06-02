import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent {
  @Input() gif: any

}
