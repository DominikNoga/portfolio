import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap as educationIcon, faBriefcase as expIcon, faToolbox as skillsIcon } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  icons = {
    education: educationIcon,
    exp: expIcon,
    skills: skillsIcon
  };

  readonly technologies: {
    pilot: string[],
    olmis: string[]
  } = {
    pilot: ['TypeScript', 'Angular', 'Less', 'Gulp'],
    olmis: ['JavaScript', 'Angular.js', 'React.js', 'Scss', 'Webpack', 'Docker', 'Jenkins']
  };
}
