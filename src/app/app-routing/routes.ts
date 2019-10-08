import { Routes } from "@angular/router";

import { LoginComponent } from "../component/login/login.component";
import { StoriesComponent } from "../component/stories/stories.component";
import { StoryCommentsComponent } from "../component/story-comments/story-comments.component";

export const routes: Routes = [
  { path: "home", component: StoriesComponent },
  { path: "login", component: LoginComponent },
  { path: "comments/:storyId", component: StoryCommentsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
