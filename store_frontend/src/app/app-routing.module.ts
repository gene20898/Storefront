import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HistoryComponent } from './components/history/history.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details/:id', component: ProductItemDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: 'order', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
