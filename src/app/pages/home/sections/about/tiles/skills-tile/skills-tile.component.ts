import { Component, input } from '@angular/core';
import { AboutTileComponent } from '../../ui/about-tile/about-tile.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-skills-tile',
  standalone: true,
  imports: [AboutTileComponent],
  templateUrl: './skills-tile.component.html',
  styleUrl: './skills-tile.component.scss'
})
export class SkillsTileComponent {
  title = 'My skills';
  icon = input.required<IconDefinition>();
}
