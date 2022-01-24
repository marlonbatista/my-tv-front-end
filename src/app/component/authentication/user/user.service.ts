import { Observable } from 'rxjs';
import { UserReturn } from './../../../models/interfaces/userReturn.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import User from '../../../models/interfaces/user.model';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private tokenService: TokenService, private http: HttpClient) {}

  saveUser(user: User): Observable<UserReturn> {
    return this.http.post(`${API}/user`, user);
  }
}
