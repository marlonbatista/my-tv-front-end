import { Observable } from 'rxjs';

export  interface IBaseService {

  getAll(url: String, userName?: string, password?: String, token?: String ): Observable<any>;

  getById(url: String, id: number): Observable<any>;

  post(url: String, userName?: string, password?: String, token?: String ): Observable<any>;

  put(url: String, item: any, userName?: string, password?: String, token?: String): Observable<any>;

  delete(url: String, item: any, userName?: string, password?: String, token?: String): Observable<any>;
}
