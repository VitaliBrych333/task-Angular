import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { AppState } from '../../store/state/app.states'
import { AddCourse } from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

import validateDate from './date.validator';
import isNumber from './duration.validator';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
  providers: [DatePipe, DataService]
})

export class CreatePageComponent implements OnInit {

  myDate = new FormControl();
  valueDuration = new FormControl();
  valueTitle = new FormControl();
  valueDescription = new FormControl();
  valueAuthor = new FormControl();
  valueSelect = new FormControl();

  constructor(private datePipe: DatePipe,
              private dataService: DataService,
              private router: Router,
              private store: Store<AppState>) {   }

  ngOnInit() {
    this.myDate = new FormControl('', [Validators.required, validateDate()]);
    this.valueDuration = new FormControl('', [Validators.required, isNumber()]);
    this.valueTitle = new FormControl('', [Validators.maxLength(50), Validators.required]);
    this.valueDescription = new FormControl('', [Validators.maxLength(500), Validators.required]);
    this.valueAuthor = new FormControl('', [Validators.required]);

    this.myDate.setValue(this.datePipe.transform(new Date().toString(), 'dd/MM/yyyy'));

    this.valueSelect = new FormControl('');
  }

  save(): void {

    let dateString = this.myDate.value;
    let dateParts = dateString.split("/");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    let payload: object = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: this.valueTitle.value,
      description: this.valueDescription.value,
      isTopRated: false,
      date: dateObject,
      authors: [
        {
          id: Math.floor(Math.random() * 10000) + 1,
          firstName: this.valueAuthor.value,
          lastName: this.valueAuthor.value,
        }
      ],
      length: this.valueDuration.value
    };

    this.store.dispatch(new AddCourse(payload));
    this.router.navigate(['/courses']);
  }

  cancel(): void {
    console.log("cancel");
    this.router.navigate(['/courses']);
  }
}
