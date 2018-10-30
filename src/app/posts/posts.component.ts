import { Component, OnInit } from '@angular/core';
import {Post} from "../_models/postModels/post";
import {PostService} from "../_services/post.service";
import {first} from "rxjs/operators";
import {NewPost} from "../_models/postModels/newPost";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  newPost = new NewPost('','','',null);
  posts: Post[] = [];
  constructor( private postService: PostService) {
  }

  ngOnInit() {
    this.loadAllPosts();

  }

  private loadAllPosts() {
    this.postService.getAll().pipe(first()).subscribe(
      posts => {
        this.posts = posts;
        console.log('postas[1]: ' + this.posts[1].title);
      }
    )
  }

  protected createPost(){
    if(this.newPost.content!='' && this.newPost.emailAddress != '' && this.newPost.title != ''){
      this.newPost.createTime = new Date();
      this.postService.createPost(this.newPost);
      this.resetPostInputs();

    }
  }

  private resetPostInputs(){
    this.newPost.content = '';
    this.newPost.emailAddress = '';
    this.newPost.createTime = null;
  }
}
