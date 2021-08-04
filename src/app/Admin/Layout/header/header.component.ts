import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public language;
  constructor(private translate: TranslateService) { 

  }

  ngOnInit() {
    this.language = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(this.language);
    
  }

  changeLanguage(language){
    localStorage.setItem('lang',language);
    this.translate.use(language);
  }
}
