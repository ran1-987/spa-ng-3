import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  imageSrc: string = '/assets/logo-1500h.png'
  @Input()
  imageSrc1: string = '/assets/logo-1500h.png'
  @Input()
  imageAlt: string = 'logo'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  text: string = 'Follow us'
  @Input()
  primaryBtn: string = 'Get started'
  @Input()
  primaryBtn1: string = 'Get started'
  constructor() {}
}
