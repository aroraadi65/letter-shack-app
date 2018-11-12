import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('/posts').valueChanges();
  }

  getPosts() {
    return this.db.list('/posts').valueChanges();
  }

  addPost(title, content, user) {
    this.db.list('/posts').push({title: title, content: content, user: user});
  }
}
