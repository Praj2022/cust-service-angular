import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { CLIENTSComponent } from './clients/clients.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { EMPLOYERSComponent } from './employers/employers.component';
import { HOMEComponent } from './home/home.component';
import { JOBSComponent } from './jobs/jobs.component';
import { RegisterComponent } from './user/register/register.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  
  {path:'home',component:HOMEComponent},
  {path :'aboutus',component:ABOUTUSComponent},
  {path :'jobs',component:JOBSComponent},
  {path :'clients',component:CLIENTSComponent},
  {path :'employers',component:EMPLOYERSComponent},
  {path :'contactus',component:CONTACTUSComponent},
  {path: 'register',component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
