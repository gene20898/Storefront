import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OrderHistory } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orderHistory: OrderHistory[] = [];
  userID: string = '';
  products: Product[] = [];
  currentProduct: Product = new Product;
  isLoaded: boolean = false;
  constructor(
    public auth: AuthService,
    private order:OrderService,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if(!this.isLoaded){
          this.userID = profile?.sub as string
          this.order.getOrder(this.userID).subscribe(res => {
            this.orderHistory = res;
          })
          this.productService.getProduct().subscribe(res => {
            this.products = res;
          })
          this.isLoaded = true;
        }
      }
    )
  }

  findProduct(id: number): void {
     this.currentProduct = this.products.find(item => item.id == id) as Product;
  }
}
