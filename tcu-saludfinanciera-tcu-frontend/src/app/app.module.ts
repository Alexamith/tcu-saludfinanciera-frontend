import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IndexComponent } from './components/index/index.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { InformationVideoComponent } from './components/information-video/information-video.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    IndexComponent,
    PurposeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    InformationVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Routes
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'login', component:LoginComponent},
      {path: 'register', component:RegisterComponent}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
