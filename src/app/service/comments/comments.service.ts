import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(public api: ApiService) {}

  getComments(id: string) {
    return new Promise((resolve, reject) => {
      this.api
        .get("comment", { storyId: id })
        .subscribe(comments => resolve(comments));
    });
  }

  postComment(comment: string, id: string) {
    return new Promise((resolve, reject) => {
      this.api
        .post("comment", { comment: comment, story: id })
        .subscribe(comment => resolve(comment));
    });
  }

  editComment(newComment: string, comment: any) {
    return new Promise((resolve, reject) => {
      this.api
        .post(`comment/${comment._id}`, { ...comment, comment: newComment })
        .subscribe(newComment => resolve(newComment));
    });
  }

  deleteComment(id: string){
    return new Promise((resolve, reject) => {
      this.api
        .delete(`comment/${id}`)
        .subscribe(status => resolve(status));
    });
  }

  replyComment(repliedComment,comment ){
    return new Promise((resolve, reject) => {
      this.api
        .post("comment", { comment: repliedComment, parentComment: comment._id,story: comment._id })
        .subscribe(comment => resolve(comment));
    });

  }

  getComment(id: string) {
    return new Promise((resolve, reject) => {
      this.api
        .get(`comment/${id}`)
        .subscribe(comments => resolve(comments));
    });
  }
}
