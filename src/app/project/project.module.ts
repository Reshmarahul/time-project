import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import {NewprojectComponent} from './newproject/newproject.component';
 
 
@NgModule({
  declarations: [
    ProjectComponent,
  NewprojectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: '', component: ProjectComponent,
      },
      {
      path:'newproject',
      component:NewprojectComponent
      }
  ])
  ],
 
})
export class ProjectModule {
  
 }
