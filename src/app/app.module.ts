import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { CoursesModule } from './component/courses.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    RoutingModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
