import { Component, Input, OnInit } from "@angular/core";
import { Commentary } from "src/app/models/comment.model";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  @Input() public comment: Commentary;

  constructor() {}

  public ngOnInit(): void {}
}
