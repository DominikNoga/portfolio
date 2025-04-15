import { Component, input } from '@angular/core';
import { AboutTileComponent } from '../../ui/about-tile/about-tile.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SKILLS } from './const/const';
import { SkillComponent } from "./ui/skill/skill.component";

@Component({
  selector: 'app-skills-tile',
  standalone: true,
  imports: [AboutTileComponent, SkillComponent],
  templateUrl: './skills-tile.component.html',
  styleUrl: './skills-tile.component.scss'
})
export class SkillsTileComponent {
  title = 'My skills';
  icon = input.required<IconDefinition>();
  readonly SKILLS = SKILLS;
}
