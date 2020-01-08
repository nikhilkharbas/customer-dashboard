import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { request } from 'http';


@Injectable()

export class LoginService  {
    constructor(private http: HttpClient) { }
    
    login(username:String,password:String): Observable<any> {
      let credentials = JSON.parse('{"username":"'+username+'","password":"'+password+'"}');
        console.log(credentials);
        return this.http.post('http://localhost:3000/api/login', credentials);
      }
    
}
