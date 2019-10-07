import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(public api:ApiService ) {}

  getComments() {
    return new Promise((resolve, reject) => {
      this.api.get("comment",{'storyId':'12'}).subscribe(story => resolve(story));
    });
  }
}
