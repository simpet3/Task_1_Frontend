import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../_models/commentModels/comment";
import {NewComment} from "../_models/commentModels/newComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  getCommentByPostId(postId: number) {
    var url = 'http://localhost:50229/api/Posts/' + postId + '/Comments';
    return this.http.get<Comment[]>(url);
  }

  createCommentByPostId(postId: number, comment: NewComment) {
    var url = 'http://localhost:50229/api/Posts/' + postId + '/Comments';
    console.log('postinama zinute');
    return this.http.post(url, comment)
      .subscribe((res:Response) => { console.log(res); });;
  }
}
