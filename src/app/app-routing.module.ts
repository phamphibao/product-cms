import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/Auth/login/login.component';
import { LayoutComponent } from './Admin/Layout/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }