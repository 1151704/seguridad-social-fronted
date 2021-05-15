import { Observable } from 'rxjs';
import { JwtResponse } from './../../auth/jwt-response';
import { AuthLoginInfo } from './../../auth/login-info';
import { REST } from './../../url.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = REST + 'login';

  constructor(private http: HttpClient) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(REST + 'validate');
  }

}
