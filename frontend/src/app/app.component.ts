import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  providers: [
    provideLottieOptions({
      player: () => player,
    })
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  public categorie: string []

  constructor() {
    this.categorie = ["home","about", "portfolio", "contact"]
  }
}
