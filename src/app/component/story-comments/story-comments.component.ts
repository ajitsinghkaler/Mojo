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
    this.commentS.getComments("12").then(comments => {
      this.comments = comments;
    });
  }
  
  addComment(comment) {
    if (comment.trim().length > 0) {
      this.commentS.postComment(comment, "12").then(comment => {
        this.comments = [...this.comments, comment];
      });
    } else {
      console.log("empty");
      return;
    }
  }
}
