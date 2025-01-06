import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { WrapperComponent } from "../wrapper/wrapper.component";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, WrapperComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  socialTiles = [
    {
      icon: faGithub,
      title: 'GitHub'
    },
    {
      icon: faLinkedin,
      title: 'Linkedin'
    }
  ];
}
