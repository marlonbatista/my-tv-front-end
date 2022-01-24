import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Passei daqui');
    // headers = this.createHeader();
    // if(this.tokenService.hasToken()){
      let headers = this.createHeader();
      // const token = this.tokenService.returnToken();
      // const headers = new HttpHeaders().append('Bearer ', token);
      request = request.clone({ headers });
    // }
    return next.handle(request);
  }

  createHeader(): HttpHeaders {
    let header = new HttpHeaders();
    header = header.append('Access-Control-Allow-Origin', '*');
    header = header.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    header = header.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');
    if(this.tokenService.hasToken()) {
      header.append('Bearer ', this.tokenService.returnToken());
    }
    return header;
  }
}
