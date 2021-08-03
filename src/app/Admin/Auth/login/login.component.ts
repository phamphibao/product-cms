import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: any;
  public login: any = {};
  public error = false;
  constructor(
    private api: Restangular,
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.login.email,[Validators.required]),
      password: new FormControl(this.login.password,[Validators.required])
    });
  }

  onSubmit(){
    this.api.all('admin/login').customPOST(this.login).subscribe(sub => {
        if (sub.result.original.error) {
            this.error = true;
        } else {
            this.cookieService.set( 'token-x',sub.result.original.token,10,"/",null,true,"None");
            this.router.navigate(['/admin']);
        }
    });

  }
}
