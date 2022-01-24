import { HttpResp } from '../http-resp';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public createrHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }
    header = header.append('Content-Type', 'application/JSON');
    header = header.append('Accept', 'application/JSON');
    header = header.append('Access-Control-Allow-Origin', '*');
    const token = localStorage.getItem('tvToken');
    if(token) {
      header = header.append('Authorization', `Bearer ${token}`);
    }

    return header;
  }

  public get(url: string) {
    const headers = this.createrHeader();
    return this.http.get(`${API}/${url}`, { headers });
  }

  public post(url: string, model: any, headers?: HttpHeaders) {
    const header = this.createrHeader(headers);
    return this.http.post(`${API}/${url}`, model, { headers: header});
  }

  public put(url: string, model: any, headers?: HttpHeaders) {
    const header = this.createrHeader(headers);
    return this.http.put(`${API}/${url}`, model, { headers: header });
  }

  public delete(url: string)  {
    const header = this.createrHeader();
    return this.http.delete(`${API}/${url}`, {headers: header});
  }

}
