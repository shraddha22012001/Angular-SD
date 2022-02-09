import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http:HttpClient) { }

  private postApi = "https://jsonplaceholder.typicode.com/posts"
  private userApi = 'https://random-data-api.com/api/name/random_name'

  getAllPosts(){
    return this.http.get(this.postApi);
  }

  getRandomUser(){
    return this.http.get(this.userApi);
  }
}