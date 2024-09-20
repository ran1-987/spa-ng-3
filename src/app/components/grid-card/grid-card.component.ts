import { Component, Input } from '@angular/core'

@Component({
  selector: 'grid-card',
  templateUrl: 'grid-card.component.html',
  styleUrls: ['grid-card.component.css'],
})
export class GridCard {
  @Input()
  text1: string =
    'Lorem ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit.​'
  @Input()
  imageSrc: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  text: string = 'Challange yourself'
  @Input()
  imageAlt: string = 'image'
  constructor() {}
}
