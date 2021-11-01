import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';
import { DogService } from './dog.service';

@Injectable({
  providedIn: 'root'
})
export class DogResolver implements Resolve<Observable<Dog[]>> {

  constructor(private dogService: DogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dog[]> {
    return this.dogService.list();
  }
}
