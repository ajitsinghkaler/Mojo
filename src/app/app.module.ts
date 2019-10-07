import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import "hammerjs";

import { HeaderComponent } from "./component/header/header.component";
import { StoriesComponent } from "./component/stories/stories.component";
import { SingleStoryComponent } from "./component/single-story/single-story.component";
import { StoryCommentsComponent } from "./component/story-comments/story-comments.component";
import { CommentTreeComponent } from "./component/comment-tree/comment-tree.component";
import { CommentComponent } from "./component/comment/comment.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    SingleStoryComponent,
    StoryCommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
