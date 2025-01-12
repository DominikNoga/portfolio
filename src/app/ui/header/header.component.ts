import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { WrapperComponent } from "../wrapper/wrapper.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { CommonModule } from '@angular/common';
import { faEnvelope, faFileAlt as faFile } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [WrapperComponent, FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  socialTiles = [
    {
      icon: faGithub,
      title: 'GitHub',
      color: '#fafbfc',
      link: 'https://github.com/DominikNoga'
    },
    {
      icon: faLinkedin,
      title: 'Linkedin',
      color: '#0072b1',
      link: 'https://www.linkedin.com/in/dominik-noga-90516b238/'
    },
    {
      icon: faFile,
      title: 'CV',
      color: '#b30c00',
      link: '/DominikNogaCv.pdf',
      download: 'DominikNogaCv.pdf'
    }
  ];
}
