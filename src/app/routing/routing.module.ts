import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { CourseListComponent } from './../component/course-list/course-list.component';
import { NotFoundComponent } from './../component/not-found/not-found.component';
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
