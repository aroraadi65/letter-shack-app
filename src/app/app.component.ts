import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService) {
  }

  loginGoogle() {
    return this.auth.signInWithGoogle();
  }

  logout() {
    return this.auth.logout();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

}
