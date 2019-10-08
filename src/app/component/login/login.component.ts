import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/service/users/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public user: UsersService) {}

  ngOnInit() {}

  onSignin(f) {
    this.user.login(f.value.username, f.value.password).then((token: any) => {
      localStorage.setItem("token", token.token);
    });
  }
}
