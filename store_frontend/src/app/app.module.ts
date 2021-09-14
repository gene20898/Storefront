import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

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
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-35p-vy7k.us.auth0.com',
      clientId: 'AYTkcAxg59khNHCxSX2bsXeNVvelUbw3'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
