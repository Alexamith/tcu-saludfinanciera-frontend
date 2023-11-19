import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Import library module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IndexComponent } from './components/index/index.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InformationVideoComponent } from './components/information-video/information-video.component';

import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConsultantIndexComponent } from './components/consultant/consultant-index/consultant-index.component';
import { NewConsultantComponent } from './components/consultant/new-consultant/new-consultant.component';
import { GeneralDataComponent } from './components/consultant/general-data/general-data.component';
import { LocationDataComponent } from './components/consultant/location-data/location-data.component';
import { FamilyDataComponent } from './components/consultant/family-data/family-data.component';
import { FinanceProfileDataComponent } from './components/consultant/finance-profile-data/finance-profile-data.component';

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
    InformationVideoComponent,
    SpinnerComponent,
    SidebarComponent,
    ConsultantIndexComponent,
    NewConsultantComponent,
    GeneralDataComponent,
    LocationDataComponent,
    FamilyDataComponent,
    FinanceProfileDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Routes
    AppRoutingModule,
    BrowserAnimationsModule,
    // NgxSpinnerModule
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
