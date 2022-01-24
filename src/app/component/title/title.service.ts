import { Category } from './../../models/enums/category.model';
import { Title, Titles } from './../../models/interfaces/title.model';
import { environment } from 'src/environments/environment';
import { HttpResp } from './../../http-resp';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private http: HttpClient) {}

  getAll(category?: String): Observable<Titles> {
    if (category)
      return this.http.get<Titles>(`${API}/title?category=${category}`);
    else
      return this.http.get<Titles>(`${API}/title`);
  }
}
