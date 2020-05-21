import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { CoreModule } from './../core/core.module';

import { CourseListComponent } from './../component/course-list/course-list.component';
import { NotFoundComponent } from '../core/component/not-found/not-found.component';
import { InfoComponent } from './../component/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/info/:id', component: InfoComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
