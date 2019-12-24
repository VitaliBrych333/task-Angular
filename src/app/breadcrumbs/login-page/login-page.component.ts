import { Component, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { User } from '../../core/user.model';

import { AppState } from '../../store/state/app.states'
import { LogIn } from '../../store/actions/user.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import existLoginValidator from './loginAsynk.validator'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent implements OnInit {


  valueLogin: string;
  valuePassword: string;

  users: any = [];
  statusLog: boolean;
  user: any;


  // user: User = new User();

  constructor(private authService: AuthServiceService,
              private router: Router,
              private store: Store<AppState>) {  }

  ngOnInit() {

    this.user = new FormGroup({
      login: new FormControl('', [Validators.required], [existLoginValidator(this.authService)]),
      password: new FormControl('', [Validators.required])
    });

    this.authService.currentMessage.subscribe(value => {
      this.statusLog = value;
    });
  }

  enter() {

    // const payload = {
    //   login: login,
    //   password: password
    // };
    this.store.dispatch(new LogIn(this.user.value));



  }
}
