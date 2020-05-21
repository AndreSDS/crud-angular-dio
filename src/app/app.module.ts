import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { CoursesModule } from './component/courses.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    CoursesModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
