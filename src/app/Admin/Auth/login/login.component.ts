import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: any;
  public login: any = {};
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.login.email,[Validators.required]),
      password: new FormControl(this.login.password,[Validators.required])
    });
  }

}
