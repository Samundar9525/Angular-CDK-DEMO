import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { DemoTableComponent } from './modules/demo-table/demo-table.component';
import { Login2Component } from './modules/login2/login2.component';
import { RegisterationComponent } from './modules/registeration/registeration.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {path:'dashboard',component:HomeComponent},
  {path:'table',component:DemoTableComponent},
  {path:'insidetable',component:DemoTableComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'login',component:Login2Component},
  {path:'signup',component:SignupComponent},
  {path:'forms',component:FormsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
