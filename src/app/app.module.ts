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
import { ModalModule } from 'ngx-bootstrap';
import { BrandDialogComponent } from './Admin/brand-dialog/brand-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatMenuModule} from '@angular/material/menu';
import { CategoryComponent } from './admin/category/category.component';
import { CategoryDialogComponent } from './admin/category-dialog/category-dialog.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
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
    MaterialModule,
    ModalModule.forRoot(),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    BrandComponent,
    BrandDialogComponent,
    CategoryComponent,
    CategoryDialogComponent
  ],
  entryComponents: [ 
    BrandDialogComponent,
    CategoryDialogComponent 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
