import { Component, OnInit, Input } from "@angular/core";
import { CommentsService } from "../../service/comments/comments.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  @Input() comment;
  collapse: boolean = true;
  edit: boolean = false;
  reply: boolean = false;
  childComments = [];

  constructor(public commentS: CommentsService) {}

  ngOnInit() {
    this.init()
  }

  init(){
    if (this.comment.childComments.length) {
      let childPromises = [];
      for (
        let index = 0;
        index < this.comment.childComments.length;
        index++
      ) {
        console.log(this.comment.childComments[index], index);
        childPromises[index] = this.commentS.getComment(
          this.comment.childComments[index]
        );
      }
      Promise.all(childPromises).then(values => {
        this.childComments = values;
        console.log(this.childComments)
      });
    }
  }

  saveEditedComment(form) {
    this.commentS
      .editComment(form.value.editComment, this.comment)
      .then(comment => {
        console.log(comment);
        this.comment = comment;
      });
  }

  editComment() {
    this.edit = !this.edit;
    console.log(this.childComments);
  }

  replyComment() {
    this.reply = !this.reply;
  }

  repliedComment(comment) {
    this.commentS.replyComment(comment, this.comment).then(comment => {
      this.commentS.getComment(this.comment._id).then((updatedComment: any) => {
        this.comment = updatedComment[0];
        this.init()
      });
    });
  }

  deleteComment() {
    this.commentS.deleteComment(this.comment._id).then(comment => {
      console.log(comment);
      this.comment.deleted = true;
    });
  }
}
