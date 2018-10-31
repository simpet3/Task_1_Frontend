import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../_models/commentModels/comment";
import {NewComment} from "../_models/commentModels/newComment";
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  api_url: string;
  constructor(private http: HttpClient, config: ConfigurationService) {
    this.api_url = config.getApiUrl();
  }

  getCommentByPostId(postId: number) {
    var url = this.api_url + '/api/Posts/' + postId + '/Comments';
    return this.http.get<Comment[]>(url);
  }

  createCommentByPostId(postId: number, comment: NewComment) {
    var url = this.api_url + '/api/Posts/' + postId + '/Comments';
    return this.http.post(url, comment)
      .subscribe((res:Response) => { console.log(res); });
  }
}
