import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../_models/postModels/post";
import {NewPost} from "../_models/postModels/newPost";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Post[]>('http://localhost:50229/api/posts');
  }

  getById(id:number) {
    return this.http.get<Post>('http://localhost:50229/api/posts/'+id);
  }

  createPost(post: NewPost) {
    return this.http.post('http://localhost:50229/api/posts', post)
      .subscribe((res:Response) => { console.log(res); });
}


}
