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
  public cookie: any;
  constructor(
    private api: Restangular,
    private cookieService: CookieService,
    private router: Router
    ) { 
      	this.cookie = this.cookieService.get('token-x');
    }

  ngOnInit() {
	  	if(this.cookie){
			  this.router.navigate(['admin']);
		  }
		this.form = new FormGroup({
		email: new FormControl(this.login.email,[Validators.required]),
		password: new FormControl(this.login.password,[Validators.required])
		});
  }

  onSubmit(){
    this.api.all('login').customPOST(this.login).subscribe(sub => {
        if (sub.result.original.error) {
            this.error = true;
        } else {
            this.cookieService.set( 'token-x',sub.result.original.token,1,"/",null,true,"None");
            this.router.navigate(['/admin']);
        }
    });

  }
}
