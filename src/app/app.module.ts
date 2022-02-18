import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { JOBSComponent } from './jobs/jobs.component';
import { CLIENTSComponent } from './clients/clients.component';
import { EMPLOYERSComponent } from './employers/employers.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './user/register/register.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    ABOUTUSComponent,
    JOBSComponent,
    CLIENTSComponent,
    EMPLOYERSComponent,
    CONTACTUSComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
