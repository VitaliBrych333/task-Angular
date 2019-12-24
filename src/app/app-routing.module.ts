import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './breadcrumbs/courses/courses.component';
import { LoginPageComponent } from './breadcrumbs/login-page/login-page.component'
import { CreatePageComponent } from './breadcrumbs/create-page/create-page.component';
import { NoContentComponent } from './breadcrumbs/no-content/no-content.component';
import { DetailComponentComponent } from './breadcrumbs/detail-component/detail-component.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'courses/new', component: CreatePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: DetailComponentComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: NoContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
