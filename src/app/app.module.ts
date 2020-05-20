import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { StarComponent } from './component/star-component/star.component';
import { ReplacePipe } from './component/replace.pipe';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { InfoComponent } from './component/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    NotFoundComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
