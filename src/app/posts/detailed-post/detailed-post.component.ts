import { Component, OnInit } from '@angular/core';
import {PostService} from "../../_services/post.service";
import {Post} from "../../_models/postModels/post";
import {Comment} from "../../_models/commentModels/comment";
import {CommentService} from "../../_services/comment.service";
import {first} from "rxjs/operators";
import {NewComment} from "../../_models/commentModels/newComment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  id: number;
  post: Post;
  comments: Comment [] = [];
  messageForm: any;
  newComment = new NewComment('','', null);

  constructor( private postService: PostService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteId();
  }

  getRouteId(){
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.loadPost(this.id);
    this.loadComments(this.id);
    console.log('parametras: ' + this.id);
  }

  private loadPost(postId: number) {
    this.postService.getById(postId).pipe(first()).subscribe(
      post=>{
        this.post = post;
      }
    )
  }

  private loadComments(postId: number){
    this.commentService.getCommentByPostId(postId).pipe(first()).subscribe(
      comments=> {
        this.comments = comments;
      }
    )
  }

  private createComment(postId:number, newComment: NewComment){
    this.commentService.createCommentByPostId(postId, newComment);
  }

  protected sendMessage() {
    if (this.newComment.emailAddress != '' && this.newComment.messageContent != '') {
      this.newComment.createTime = new Date();
      this.createComment(this.id, this.newComment);
      console.log('issiusta zinute :' + this.newComment.messageContent);
      this.resetMessageInputs();
    }
  }
    private resetMessageInputs(){
      this.newComment.messageContent = '';
      this.newComment.emailAddress = '';
      this.newComment.createTime = null;
    }
}
