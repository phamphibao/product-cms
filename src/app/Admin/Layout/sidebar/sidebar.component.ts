import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private cookieService: CookieService,private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.cookieService.delete('token-x','/');
    this.router.navigate(['/login']);
  }

}
