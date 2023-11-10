import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { IndexComponent } from './components/index/index.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformationVideoComponent } from './components/information-video/information-video.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    IndexComponent,
    PurposeComponent,
    FooterComponent,
    InformationVideoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'login', component: LoginComponent}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
