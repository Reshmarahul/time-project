import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimecardComponent } from './timecard.component';
const routes: Routes = [
  { path: '', component: TimecardComponent }
//{ path: 'project', loadChildren: './project.module#ProjectModule'}
 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimecardComponent]
})
export class TimecardModule { }
