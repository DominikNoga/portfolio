import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, WrapperComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
