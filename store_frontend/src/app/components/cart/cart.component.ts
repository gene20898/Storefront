import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  name: string = "";
  address: string = "";
  cred: string = "";
  userID: string = "";
  isOrderSent: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private confirm:ConfirmationService,
    private order:OrderService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.totalPrice();
  }

  amountChange(item: Product):void {
    if(item.amount == 0){
      alert("Removed from cart!");
      this.cartService.removeItem(item);
    }
    this.cart = this.cartService.getCartItems();
    this.totalPrice();
  }
  
  totalPrice():void {
    this.total = this.cart.reduce((total,item) => {return total + item.amount*item.price;}, 0);
    this.total = parseFloat(this.total.toFixed(2));
  }

  sendOrder():void {
    let productList: {quantity: number, product_id:number}[] = []
    for(let i = 0; i < this.cart.length; i++){
      productList[i] = {quantity: this.cart[i].amount, product_id: this.cart[i].id}
    }

    this.auth.user$.subscribe(
      (profile) => {
        if(!this.isOrderSent){
          this.userID = profile?.sub as string;
          const result = this.order.createOrder({
            status: "active",
            user_id: this.userID,
            product_list: productList
          });
          result.subscribe((res) => {console.log(res);});
          this.isOrderSent = true;
        }
      }
    );
  }

  onSubmit(): void {
    this.confirm.confirm(this.name, this.total);
    this.sendOrder();
    this.router.navigate(['/confirm']);
  }
}
