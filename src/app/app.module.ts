import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './core/interceptor';
import { LoadingScreenInterceptor } from './core/loading-screen/loading.interceptor';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducer } from './store/reducers/auth.reducers';
import { reducerCoursesList } from './store/reducers/courses.reducers';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { CoursesEffects } from './store/effects/courses.effects';
import { AppState } from './store/state/app.states'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSelectModule } from '@ng-select/ng-select';

export const appReducers: ActionReducerMap<AppState, any> = {
  authState: reducer,
  coursesState: reducerCoursesList
};

@NgModule({
  declarations: [
    AppComponent,
    //  DurationPipe
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, CoursesEffects ]),
    BrowserAnimationsModule,
    NgSelectModule

  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
