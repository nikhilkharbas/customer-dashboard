import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userName : '';
    public password : '';
    constructor(private router: Router,
        private loginService: LoginService) {

    }

    ngOnInit() { }

    onLogin() {
        console.log('username ',this.userName);
        console.log('password ',this.password);
      //  this.loginService.login();
        sessionStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
