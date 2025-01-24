import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap as educationIcon, faUser as bioIcon, faBriefcase as expIcon } from '@fortawesome/free-solid-svg-icons'
import { WrapperComponent } from '../../../../ui/wrapper/wrapper.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WrapperComponent, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  icons = {
    education: educationIcon,
    bio: bioIcon,
    exp: expIcon
  }
}
