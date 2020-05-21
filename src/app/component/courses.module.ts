import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StarModule } from './../shared/component/star-component/star.module';
import { PipeModule } from './../shared/pipe/pipe.module';

import { InfoComponent } from './info/info.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    CourseListComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    StarModule,
    PipeModule
  ]
})
export class CoursesModule { }
