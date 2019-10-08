import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public user:UsersService) { }

  ngOnInit() {
  }
  
  onSignup(f){
    this.user.signup(f.value.username,f.value.password).then(a=>{
      console.log(a)
    })
  }

}
