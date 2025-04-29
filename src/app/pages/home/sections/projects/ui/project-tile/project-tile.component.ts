import { Component, input } from '@angular/core';
import { Project } from '../../model/model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEarthEurope as appIcon
}
from '@fortawesome/free-solid-svg-icons'
import {
  faGithub as repoIcon
} from '@fortawesome/free-brands-svg-icons';
import { TextClampDirective } from '../../../../../../directives/text-clamp.directive';


@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [FontAwesomeModule, TextClampDirective],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.scss'
})
export class ProjectTileComponent {
  project = input.required<Project>();
  icons = {
    repo: repoIcon,
    app: appIcon
  };

  getImgPath = () => `projects/${this.project().img}`;
}
