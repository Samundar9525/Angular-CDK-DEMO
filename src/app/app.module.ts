import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoanggoComponent } from './modules/demoanggo/demoanggo.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DemoclipboardComponent } from './modules/democlipboard/democlipboard.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { DemoDragDropComponent } from './modules/demo-drag-drop/demo-drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DemoTableComponent } from './modules/demo-table/demo-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { LayoutComponent } from './modules/layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {RegisterationComponent} from "../app/modules/registeration/registeration.component";
import { FormsComponent } from './forms/forms.component'
import {Login2Component} from "../app/modules/login2/login2.component";
import {SignupComponent} from "../app/modules/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoanggoComponent,
    DemoclipboardComponent,
    DemoDragDropComponent,
    DemoTableComponent,
    LayoutComponent,
    NavComponent,
    HomeComponent,
    RegisterationComponent,
    FormsComponent,
    Login2Component,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    ClipboardModule,
    FormsModule,
    DragDropModule,
    CdkTableModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
