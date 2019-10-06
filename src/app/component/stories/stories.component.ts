import { Component, OnInit } from "@angular/core";
import { StoriesService } from "src/app/service/stories/stories.service";
@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  stories;

  constructor(public storyS: StoriesService) {}

  ngOnInit() {
    this.storyS.getStories().then(stories => {
      this.stories = stories;
    });
  }
}
