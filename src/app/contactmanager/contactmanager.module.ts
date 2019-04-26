import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactManagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '',
    component: ContactManagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  providers: [
    UserService
  ]
})
export class ContactManagerModule { }