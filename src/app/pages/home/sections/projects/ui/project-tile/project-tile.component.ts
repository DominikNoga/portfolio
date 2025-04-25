import { Component, input } from '@angular/core';
import { Project } from '../../model/model';

@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.scss'
})
export class ProjectTileComponent {
  project = input.required<Project>();
}
