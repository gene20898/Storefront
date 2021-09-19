import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, AuthHttpInterceptor  } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { HistoryComponent } from './components/history/history.component';

import { environment } from '../environments/environment';
import { LoadingComponent } from './layout/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConfirmationComponent,
    CartComponent,
    ProductItemComponent,
    HeaderComponent,
    ProductItemDetailsComponent,
    AuthButtonComponent,
    HistoryComponent,
    LoadingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      redirectUri: window.location.origin,
      audience: environment.auth.audience,
      httpInterceptor: {
        allowedList: [`${environment.dev.serverUrl}/order_history`, `${environment.dev.serverUrl}/orders`],
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
