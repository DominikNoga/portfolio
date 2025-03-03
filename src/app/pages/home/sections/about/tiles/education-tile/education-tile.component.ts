import { Component, input } from '@angular/core';
import { AboutTileComponent } from '../../ui/about-tile/about-tile.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-education-tile',
  standalone: true,
  imports: [AboutTileComponent],
  templateUrl: './education-tile.component.html',
  styleUrl: './education-tile.component.scss'
})
export class EducationTileComponent {
  title = 'Education';
  icon = input.required<IconDefinition>();
}
