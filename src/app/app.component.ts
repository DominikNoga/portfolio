import { Component } from '@angular/core';
import { HeaderComponent } from "./ui/header/header.component";
import { FooterComponent } from "./ui/footer/footer.component";
import { NavComponent } from './ui/nav/nav.component';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from "./ui/wrapper/wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavComponent, RouterModule, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
