import { Component } from '@angular/core';
import { AboutComponent } from '../sections/about/about.component';
import { HeaderComponent } from "../../../ui/header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
