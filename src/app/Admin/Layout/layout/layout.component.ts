import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public cookie = null;
  constructor(private cookieService: CookieService,
              private router: Router
              ) { 
    this.cookie = this.cookieService.get('token-x') ? this.cookieService.get('token-x') : null ;
    console.log(this.cookie);
      if (this.cookie == null) {
        this.router.navigate(['/login']);
      }
  }

  ngOnInit() {
    
  }

}
