import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
