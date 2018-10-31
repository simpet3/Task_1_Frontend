import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../_models/postModels/post";
import {NewPost} from "../_models/postModels/newPost";
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  api_url: string;
  constructor(private http: HttpClient, config: ConfigurationService) {
    this.api_url = config.getApiUrl();
  }

  getAll() {
    return this.http.get<Post[]>( this.api_url+ '/api/posts');
  }

  getById(id:number) {
    return this.http.get<Post>(this.api_url + '/api/posts/'+id);
  }

  createPost(post: NewPost) {
    return this.http.post( this.api_url + '/api/posts', post)
      .subscribe((res:Response) => { console.log(res); });
  }
}
