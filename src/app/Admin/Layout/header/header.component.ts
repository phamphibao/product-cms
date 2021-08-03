import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public language;
  constructor() { }

  ngOnInit() {
    this.language = localStorage.getItem('lang') || 'vn';
  }

  changeLanguage(language){
    localStorage.setItem('lang',language);
    // window.location.reload();
    
  }
}
