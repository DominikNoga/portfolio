import { Component, input } from '@angular/core';
import { AboutTileComponent } from '../../ui/about-tile/about-tile.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-exp-tile',
  standalone: true,
  imports: [AboutTileComponent],
  templateUrl: './exp-tile.component.html',
  styleUrl: './exp-tile.component.scss'
})
export class ExpTileComponent {
  title = 'Education';
  icon = input.required<IconDefinition>();
}
