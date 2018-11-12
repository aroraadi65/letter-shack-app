import {Injectable} from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User;

  constructor(private fbAuth: AngularFireAuth) {
    this.user = fbAuth.authState;
    this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this.fbAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  getUser() {
    if (this.userDetails) {
      return this.userDetails.toJSON();
    } else {
      return null;
    }
  }

  getUserName() {
    if (this.isLoggedIn()) {
      const user = this.fbAuth.auth.currentUser;
      return user.displayName;
    }
  }

  logout() {
    this.fbAuth.auth.signOut()
      .then(_ => {
        this.userDetails = null;
      });
  }
}


