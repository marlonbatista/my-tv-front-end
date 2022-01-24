import { TokenService } from './token/token.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';
import FormLogin from 'src/app/models/interfaces/formLogin.model';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate(email: string, password: string): Observable<HttpResponse<any>> {
    const headers = this.createHeader();
    return this.httpClient
      .post(
        `${API}/auth`,
        { email, password },
        { headers, observe: 'response' }
      )
      .pipe(
        tap((response: any) => {
          console.log('Response', response);
          const authToken = response.headers.get('Bearer') ?? '';
          const token = response.token ?? '';
          this.tokenService.saveToken(token);
        })
      );
  }

  private createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append('Access-Control-Allow-Origin', '*');
    header = header.append(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE'
    );
    header = header.append(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');

    return header;
  }
}
