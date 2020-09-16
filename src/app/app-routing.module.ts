import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
      component: LoginComponent
  },
  {
    path: '',
      component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
