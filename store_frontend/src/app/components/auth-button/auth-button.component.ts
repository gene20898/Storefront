import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
   <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <p class="btn btn-light mb-0" (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </p>
    </ng-container>

    <ng-template #loggedOut>
      <p class="btn btn-dark mb-0" (click)="auth.loginWithRedirect()">Log in</p>
    </ng-template>
  `
})
export class AuthButtonComponent implements OnInit {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  ngOnInit(): void { }
}
