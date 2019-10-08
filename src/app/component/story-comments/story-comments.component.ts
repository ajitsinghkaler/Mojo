import { Component, OnInit } from "@angular/core";
import { CommentsService } from "src/app/service/comments/comments.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-story-comments",
  templateUrl: "./story-comments.component.html",
  styleUrls: ["./story-comments.component.scss"]
})
export class StoryCommentsComponent implements OnInit {
  comments;
  id;
  constructor(public commentS: CommentsService,public route:ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['storyId']
    console.log(this.id)
    this.commentS.getComments(this.id).then(comments => {
      this.comments = comments;
    });
  }

  addComment(comment) {
    if (comment.trim().length > 0) {
      this.commentS.postComment(comment, this.id).then(comment => {
        this.comments = [...this.comments, comment];
      });
    } else {
      console.log("empty");
      return;
    }
  }
}
