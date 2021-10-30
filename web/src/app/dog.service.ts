import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../environments/environment';
import { Dog } from './dog';

const API = environment.ApiURL;

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.
      get<Dog[]>(API + '/dogs');
  }

  create(name: string, gender: string) {
    return this.http
      .post(API + '/dogs', {name, gender});
  }
}
