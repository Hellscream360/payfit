import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Post } from "./models/post.model";
import { PostsService } from "./services/posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private readonly _postsService: PostsService) {}

  public ngOnInit(): void {
    this._postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
  }
}
