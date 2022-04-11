import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from "./components/post/post.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { CommentComponent } from "./components/comments/comment/comment.component";
import { PostsService } from "./services/posts.service";
import { CapitalizeFirstPipe } from "./directives/capitalize-first.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [PostsService, CapitalizeFirstPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
