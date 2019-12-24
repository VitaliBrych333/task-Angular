import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../core/user.model';
import 'rxjs/add/operator/delay';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
  baseURL = 'http://localhost:3004';

  users: any = [];

  public messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router ) { }

  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }

  logIn(login: string, password: string): Observable<any> {
    return this.http.post<User>(this.baseURL + '/auth/login', {login, password});
  }

  logOut(): void {
    this.router.navigate(['/login'])
    console.log("Logout action");
  }

  isAuthenticated() {
    return this.http.get(this.baseURL + '/users');
    // debugger;
    // let token = localStorage.getItem('fakeToken');
    // if(token) return true;
    // return false;
  }

  checkLogin(userName: string): Observable<boolean> {
    return this.http.get(this.baseURL + '/users').pipe(map(data=>{
      const usersList = data as Array<any>;
      return usersList.findIndex(user => user.login === userName) > -1;
    }));
  }

  getUserInfo(): Observable<any> {
    return this.http.post<User>(this.baseURL + '/auth/userinfo', {});
  }
}
