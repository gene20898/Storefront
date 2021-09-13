import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
})
export class AuthButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void { }
}
