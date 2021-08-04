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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { BrandComponent } from './Admin/brand/brand.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './material/material.module';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    BrandComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    resful,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }}
    ),
    MaterialModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
