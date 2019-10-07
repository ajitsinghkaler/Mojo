import { Component, OnInit } from "@angular/core";
import { CommentsService } from "src/app/service/comments/comments.service";

@Component({
  selector: "app-story-comments",
  templateUrl: "./story-comments.component.html",
  styleUrls: ["./story-comments.component.scss"]
})
export class StoryCommentsComponent implements OnInit {
  comments;
  constructor(public commentS: CommentsService) {}

  ngOnInit() {
    this.commentS.getComments().then(comments => {
      this.comments = comments;
    });
  }
}
