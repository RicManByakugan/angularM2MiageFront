import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment App';

  constructor(private authService:AuthService,
    private router:Router) {}
  login() {
    // on utilise le service d'autentification
    // pour se connecter ou se déconnecter
    if(!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
      // on navigue vers la page d'accueil
      this.router.navigate(['/home']);
    }
  }
}
