import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('user')) {
      this.userToken();
    }
  }
  baseUrl: string = 'https://route-egypt-api.herokuapp.com/';
  name: any;

  User = new BehaviorSubject(null);
  signup(data: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signup', data);
  }
  signin(data: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', data);
  }
  userToken() {
    let data: any = localStorage.getItem('user');
    let token: any = jwtDecode(data);
    let name: any = token.first_name;

    this.User.next(token);
    return name;
  }
  logout() {
    localStorage.removeItem('user');
    this.User.next(null);
    this._Router.navigate(['/main']);
  }
  getTrnding(data:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${data}/day?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7`);
  }
  getMovieDetail(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&language=en-US`)
  }
  getTvDetail(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&language=en-US`)
  }
  getPeopleDetail(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&language=en-US`)
  }
  getmovie(num:number):Observable<any>
  {
return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&page=${num}`)
  }
  gettv(num:number):Observable<any>
  {
return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&page=${num}`)
  }
  getpeople(num:number):Observable<any>
  {
return this._HttpClient.get(`https://api.themoviedb.org/3/trending/person/day?api_key=3c4b06ed13a8dea8487ea55bc34a8ca7&page=${num}`)
  }
}
