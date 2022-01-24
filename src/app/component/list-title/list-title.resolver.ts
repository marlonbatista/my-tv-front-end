import { TitleService } from './../title/title.service';
import { Titles } from './../../models/interfaces/title.model';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListTitleResolver implements Resolve<Titles> {

  constructor(private titleService: TitleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Titles> {
    return this.titleService.getAll();
  }
}
