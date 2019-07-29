import { Component, OnInit } from '@angular/core';


class User {
  public login: string;
  public password: string;

  constructor(login: string, password: string){
    this.login = login;
    this.password = password;
  }
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{


  user: User = new User("", "");

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }






 constructor() { }

  ngOnInit() {
  }

}
