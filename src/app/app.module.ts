import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailedPostComponent } from './posts/detailed-post/detailed-post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import {ConfigurationService} from "./_services/configuration.service";
import {PostService} from "./_services/post.service";
import {CommentService} from "./_services/comment.service";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailedPostComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostService,
    CommentService,
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
