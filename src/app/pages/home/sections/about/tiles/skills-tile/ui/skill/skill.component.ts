import { Component, input } from '@angular/core';
import { Skill } from '../../../../model/model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  readonly IMG_PATH_PREFIX = 'skills';
  skill = input.required<Skill>();
}
