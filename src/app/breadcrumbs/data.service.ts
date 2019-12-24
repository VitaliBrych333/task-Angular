import { Injectable } from '@angular/core';
import { CoursesItem } from './courses-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = 'http://localhost:3004';
  public courseItems: CoursesItem[];

  constructor(private http: HttpClient) { }

  getList(count: any)  {
    return this.http.get(this.baseURL+'/courses?start=0&count='+`${count}`)
  }

  searchName(value: string) {
    const options = value ? { params: new HttpParams().set('textFragment', value) } : {};
    return this.http.get(this.baseURL + '/courses', options)
  }

  getAuthors() {
    return this.http.get(this.baseURL + '/authors')
  }


  getItem(id) {}

  updateItem(obj: object) {
    // this.courseItems.filter(o => o.id === obj.id);
    console.log('update')


  }

  removeItem(id:number, courseItems: any) {
    let question = confirm("Are you sure?");
    if(question) {
      return this.courseItems = courseItems.filter(obj => obj.id !== id);
    } else {
      return this.courseItems = courseItems;
    }
  }
}
