import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { AppState } from '../../store/state/app.states'
import { UpdateCourse } from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import isNumber from '../create-page/duration.validator';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css'],
  providers: [DataService, DatePipe]
})
export class DetailComponentComponent implements OnInit {

  id: number;
  title: string;
  // time: number;

  courseItems = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
    length: new FormControl(),
    id: new FormControl(),
    author: new FormControl(),
  })

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private datePipe: DatePipe,
              private router: Router,
              private store: Store<AppState>) {  }

  ngOnInit() {

    this.dataService.getList(' ').subscribe((res : any[]) => {
      let id: number = +this.route.snapshot.paramMap.get('id');
      let data = this.datePipe.transform(res.filter(o => o.id == id)[0].date, 'yyyy-MM-dd');
      this.title = res.filter(o => o.id == id)[0].name;
      // this.time = res.filter(o => o.id == id)[0].length;

      this.courseItems = new FormGroup({
        name: new FormControl(res.filter(o => o.id == id)[0].name, [Validators.maxLength(50), Validators.required]),
        description: new FormControl(res.filter(o => o.id == id)[0].description, [Validators.maxLength(500), Validators.required]),
        date: new FormControl(data, [Validators.required]),
        length: new FormControl(res.filter(o => o.id == id)[0].length, [Validators.required, isNumber()]),
        id: new FormControl(res.filter(o => o.id == id)[0].id),
        author: new FormControl('', [Validators.required]),
      })




      
 });
  }

  save(): void {
    this.store.dispatch(new UpdateCourse(this.courseItems.value));

    this.router.navigate(['/courses']);
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }
}
