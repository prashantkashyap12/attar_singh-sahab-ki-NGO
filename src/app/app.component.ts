import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/reuse-compo/footer/footer.component';
import { HeaderComponent } from './shared/reuse-compo/header/header.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ngo';
}
