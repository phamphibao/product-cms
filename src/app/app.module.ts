import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './Admin/Layout/layout/layout.component';
import { HeaderComponent } from './Admin/Layout/header/header.component';
import { SidebarComponent } from './Admin/Layout/sidebar/sidebar.component';
import { FooterComponent } from './Admin/Layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Admin/Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { resful } from './Services/api.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    resful,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
