import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import "hammerjs";
import { HeaderComponent } from "./header/header.component";
import { StoriesComponent } from "./stories/stories.component";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [AppComponent, HeaderComponent, StoriesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
