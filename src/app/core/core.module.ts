import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [RouterModule],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ]
})
export class CoreModule {}
