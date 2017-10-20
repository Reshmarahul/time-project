import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import{ProjectModule} from './project/project.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule,Routes } from'@angular/router';
//import { TimecardComponent } from './timecard/timecard.component';
//import { ProjectComponent } from './project/project.component';
import { ItemComponent } from './item/item.component';
//import { NewprojectComponent } from './newproject/newproject.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
   // TimecardComponent,
   // ProjectComponent,
      ItemComponent,
    //NewprojectComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //  ProjectModule,
    HttpModule,
    RouterModule.forRoot([
//       {
// path:'project',
// component:ProjectComponent
//       },
{ path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
{ path: 'timecard', loadChildren: 'app/timecard/timecard.module#TimecardModule' },
//{ path: 'newproject', loadChildren: 'app/newproject/newproject.module#NewprojectModule' },
{
  path:"**",
  redirectTo:'heading',
pathMatch:'full'
},
    //   {
    //     path:'timecard',
    //     component:TimecardComponent
    //           },
     
              {
              path:'item',
              component:ItemComponent
                    },   
                    // {
                    //   path:'newproject',
                    //   component:NewprojectComponent
                    //         },               
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}