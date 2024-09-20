import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawrihz: string = ' '
  rawbtyy: string = ' '
  rawzwm7: string = ' '
  rawc8df: string = ' '
  rawralp: string = ' '
  raw90og: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Feedbox Mobile App')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Feedbox Mobile App',
      },
    ])
  }
}
