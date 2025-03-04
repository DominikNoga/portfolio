import { Component, input, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-about-tile',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-tile.component.html',
  styleUrl: './about-tile.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutTileComponent {
  icon = input.required<IconDefinition>();
  title = input.required<string>();
}
