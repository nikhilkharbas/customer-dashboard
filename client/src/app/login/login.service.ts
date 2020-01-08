import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class LoginService  {
    constructor(private http: HttpClient) { }
    
    login(username,password): Observable<any> {
      let credentials = {username:username,password:password}
        return this.http.post('/api/login', credentials);
      }
    
}
