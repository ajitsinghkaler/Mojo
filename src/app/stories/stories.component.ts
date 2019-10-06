import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  stories;

  constructor() {
    this.stories = [
      {
        "id": 12469856,
        "title": "Owl Lisp – A purely functional Scheme that compiles to C",
        "points": 57,
        "user": "rcarmo",
        "time": 1473524669,
        "time_ago": "2 hours ago",
        "comments_count": 9,
        "type": "link",
        "url": "https://github.com/aoh/owl-lisp",
        "domain": "github.com"
      },
      {
        "id": 12469823,
        "title": "How to Write Articles and Essays Quickly and Expertly",
        "points": 52,
        "user": "bemmu",
        "time": 1473524142,
        "time_ago": "2 hours ago",
        "comments_count": 6,
        "type": "link",
        "url": "https://www.downes.ca/post/38526",
        "domain": "downes.ca"
      },
    ];
  }

  ngOnInit() {}
}
