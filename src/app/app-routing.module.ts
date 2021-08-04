import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/Auth/login/login.component';
import { BrandComponent } from './Admin/brand/brand.component';
import { LayoutComponent } from './Admin/Layout/layout/layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: LayoutComponent,
    children: [
      {
        path: 'brand',
        component: BrandComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }