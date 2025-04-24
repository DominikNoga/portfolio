import { Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AboutTileComponent } from "../../ui/about-tile/about-tile.component";
import { Certificate } from '../../model/model';
import { CertTileComponent } from './ui/cert-tile/cert-tile.component';
import { CERTIFICATES } from './const/const';

@Component({
  selector: 'app-certificates-tile',
  standalone: true,
  imports: [AboutTileComponent, CertTileComponent],
  templateUrl: './certificates-tile.component.html',
  styleUrl: './certificates-tile.component.scss'
})
export class CertificatesTileComponent {
  title = 'Certificates & Courses';
  icon = input.required<IconDefinition>();
  certificates: Certificate[] = CERTIFICATES;
  currentPage = 0;

  goToPage(index: number): void {
    this.currentPage = index;
  }
}
