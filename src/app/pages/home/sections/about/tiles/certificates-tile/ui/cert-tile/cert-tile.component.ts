import { Component, input } from '@angular/core';
import { Certificate } from '../../../../model/model';

@Component({
  selector: 'app-cert-tile',
  standalone: true,
  imports: [],
  templateUrl: './cert-tile.component.html',
  styleUrl: './cert-tile.component.scss'
})
export class CertTileComponent {
  cert = input.required<Certificate>();

  getImgPath = (img: string) => `skills/${img}`;
}
