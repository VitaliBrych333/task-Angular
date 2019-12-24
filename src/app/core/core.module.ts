import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component'


@NgModule({
  declarations: [ FooterComponent, LoadingScreenComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    FooterComponent, LoadingScreenComponent
  ]
})
export class CoreModule { }
