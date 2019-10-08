import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public api: ApiService) {}

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.api
        .post("users/login", { username: username, password: password })
        .subscribe(story => resolve(story));
    });
  }

  signup(username, password) {
    return new Promise((resolve, reject) => {
      this.api
        .post("users/signup", { username: username, password: password })
        .subscribe(story => resolve(story));
    });
  }

  logout(){
    localStorage.removeItem("token")
  }
}
