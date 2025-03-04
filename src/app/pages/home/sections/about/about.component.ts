import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGraduationCap as educationIcon,
  faBriefcase as expIcon,
  faToolbox as skillsIcon,
  faLanguage as langIcon
}
from '@fortawesome/free-solid-svg-icons'
import { ExpTileComponent } from './tiles/exp-tile/exp-tile.component';
import { EducationTileComponent } from './tiles/education-tile/education-tile.component';
import { SkillsTileComponent } from './tiles/skills-tile/skills-tile.component';
import { AboutTileComponent } from "./ui/about-tile/about-tile.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, ExpTileComponent, EducationTileComponent, SkillsTileComponent, AboutTileComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  icons = {
    education: educationIcon,
    exp: expIcon,
    skills: skillsIcon,
    language: langIcon
  };
}
