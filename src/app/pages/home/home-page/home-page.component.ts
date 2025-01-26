import { Component } from '@angular/core';
import { AboutComponent } from '../sections/about/about.component';
import { HeaderComponent } from "../../../ui/header/header.component";
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from "../sections/contact/contact.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent, HeaderComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
