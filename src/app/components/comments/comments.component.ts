import { Component, Input, OnInit } from "@angular/core";
import { Commentary } from "src/app/models/comment.model";
import { CommentsService } from "src/app/services/comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent implements OnInit {
  @Input() public postId: number;
  public comments: Commentary[] = [];

  constructor(private readonly _commentsService: CommentsService) {}

  public ngOnInit(): void {
    // console.log("tyo");
    this._commentsService
      .getCommentsByPostId(this.postId)
      .subscribe((comments) => {
        // console.log(comments);
        this.comments = comments;
      });
  }
}
