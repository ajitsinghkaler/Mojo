import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
@Injectable({
  providedIn: "root"
})
export class StoriesService {
  constructor(public api: ApiService) {}

  getStories() {
    return new Promise((resolve, reject) => {
      this.api.get("stories").subscribe(story => resolve(story));
    });
  }
}
