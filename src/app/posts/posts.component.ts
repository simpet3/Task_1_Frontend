import { Component, OnInit } from '@angular/core';
import {Post} from "../_models/postModels/post";
import {PostService} from "../_services/post.service";
import {NewPost} from "../_models/postModels/newPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  newPost = new NewPost('','','',null);
  posts: Post[] = [];

  constructor( private postService: PostService) {

    this.sortPosts();
  }

  ngOnInit() {
    this.loadAllPosts();
  }

  private loadAllPosts() {
    this.postService.getAll().subscribe(posts=> {this.posts = posts; this.sortPosts()}  );
  }

  protected createPost(){
    if(this.newPost.content!='' && this.newPost.emailAddress != '' && this.newPost.title != ''){
      this.newPost.createTime = new Date();
      this.postService.createPost(this.newPost);
      this.resetPostInputs();
      location.reload();
    }
  }

  private resetPostInputs(){
    this.newPost.content = '';
    this.newPost.emailAddress = '';
    this.newPost.createTime = null;
  }

  private sortPosts(){
      this.posts.sort(function(a,b){
      return a.createTime < b.createTime ? -1 : 1;
    });

  }
}
