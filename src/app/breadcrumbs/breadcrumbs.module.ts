import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
// import { FormsModule } from '@angular/forms';
import { BorderDirective } from './directive/border.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { NoContentComponent } from './no-content/no-content.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthServiceService } from './auth-service.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormatDateComponent } from './format-date/format-date.component';
// import { DateComponent } from './date/date.component';

import { MatInputModule } from '@angular/material';
import { MultipleDemoComponent } from './ng-select/ng-select.component';
import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [CoursesComponent, CoursesItemComponent, BorderDirective,
    DurationPipe, CreatePageComponent, HeaderComponent, LoginPageComponent,
    //  AppRoutingModule,
     OrderByPipe, FilterPipe, NoContentComponent, DetailComponentComponent, MultipleDemoComponent],
  imports: [
    CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, MatInputModule, SelectModule
  ],
  exports: [CoursesComponent, CreatePageComponent, LoginPageComponent, HeaderComponent, MultipleDemoComponent ],
  providers: [ AuthServiceService ]
})
export class BreadcrumbsModule { }
