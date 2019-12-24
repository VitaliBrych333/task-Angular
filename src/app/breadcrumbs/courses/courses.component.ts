import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { AppState } from '../../store/state/app.states'
import { LoadMore } from '../../store/actions/user.actions';
import { Store, select } from '@ngrx/store';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FilterPipe, DataService]
})
export class CoursesComponent implements OnInit {

  courseItems: any = [];
  valueSearch = new FormControl();
  stateFieldSearch: boolean;
  date: number;
  id: number;
  countItems: number = 10;

  private searchTerms = new Subject<string>();

  deleteItem(id: number) {
    this.courseItems = this.dataService.removeItem(id, this.courseItems);
  }

  showSearch(valueSearch: any): void {

    valueSearch = valueSearch.value.trim();
    if(valueSearch.length > 2) {
      this.searchTerms.next(valueSearch);
      console.log('+++++++++++++')
    } else {
      console.log('fffffff')
    }

  }

  // showSearch(valueSearch: string ): any {
  //   if(this.valueSearch == undefined) {
  //     this.stateFieldSearch = true;
  //   } else {
  //     this.valueSearch = this.valueSearch.trim();
  //     this.dataService.searchName(this.valueSearch).subscribe((res : any[])=>{
  //       this.courseItems = res;
  //       console.log(this.courseItems)
  //     });
  //   }
  // }

  showOthers(count: number): any {
    const payload = {
      count: count,
    };

   this.store.dispatch(new LoadMore(payload))
    // this.dataService.getList(count).subscribe((res : any[])=>{
    //   this.courseItems = res;
    // });

  }




  constructor(private pipe: FilterPipe,
              private dataService: DataService,
              private route: ActivatedRoute,
              private store: Store<AppState>) {







            // console.log('+++++++++++++', this.countItems)
      // this.dataService.getList(5).subscribe((res : any[])=>{
      //      this.courseItems = res;
      // });


                   }

  ngOnInit() {

    // console.log('ffffffffff',this.courseItems)
    this.store.pipe(select('coursesState')).subscribe(obj =>
      this.courseItems = obj.coursesList
    );

    // if(!localStorage.getItem('firstEntry')) {
    //   const payload = {
    //     count: 5,
    //   };

    //   this.store.dispatch(new LoadMore(payload));
    //   localStorage.setItem('firstEntry', 'true')
    // }


    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(1000),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((valueSearch: string) => this.dataService.searchName(valueSearch)),
    ).subscribe((res : any[])=>{
      this.courseItems = res;
    });
  }
    // let id: number = +this.route.snapshot.paramMap.get('id');
    // console.log('ffffffff', id)

    // if(id) {
    //   this.courseItems = this.dataService.getList().filter(obj => obj.id === id);
    // } else {
    //   this.courseItems = this.dataService.getList();
    // }

}

  //http://qaru.site/questions/846572/angular-4-pass-data-between-2-not-related-components




