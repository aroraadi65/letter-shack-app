import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title: string;
  content: string;
  user = '';

  constructor(private postService: PostService, private auth: AuthService) {
    if (auth.isLoggedIn()) {
      this.user = auth.getUserName();
    }
  }

  ngOnInit() {
  }

  addPost() {
    this.postService.addPost(this.title, this.content, this.user);
  }

}
