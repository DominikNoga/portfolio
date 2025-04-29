import { Component } from '@angular/core';
import { PROJECTS } from './const/const';
import { ProjectTileComponent } from './ui/project-tile/project-tile.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectTileComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
