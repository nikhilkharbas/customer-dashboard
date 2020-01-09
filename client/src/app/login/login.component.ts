import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userName: '';
    public password: '';
    constructor(private router: Router,
        private loginService: LoginService) {

    }

    ngOnInit() { }

    onLogin() {
        console.log('username ', this.userName);
        console.log('password ', this.password);
        this.loginService.login(this.userName, this.password).subscribe(
            (response) => {
                console.log('Success' + response);
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('isLoggedin', 'true');
                if (sessionStorage.getItem('isLoggedin')) {
                    // addcondition for check auth token
                    this.router.navigate(['/dashboard']);
                }
                      },
              (err) => {
                console.log('Error:' + JSON.stringify(err));
              }
        );
    }
}
