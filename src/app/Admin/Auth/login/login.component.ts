import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: any;
  public login: any = {};
  constructor(
    private api: Restangular,
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.login.email,[Validators.required]),
      password: new FormControl(this.login.password,[Validators.required])
    });
  }

  onSubmit(){
    this.api.all('admin/login').customPOST(this.login).subscribe(sub => {
      console.log(sub.result.original);
    });
    
  }
}
