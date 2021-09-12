import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  amount: number = 1;
  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  addCart(): void{
    const inCartProduct = this.cartService.getItemById(this.product.id);
    if(inCartProduct == undefined){
      this.product.amount = this.amount;
      this.cartService.addCart(this.product);
    }
    else{
      inCartProduct.amount += +this.amount;
    }
    alert("Added to cart!");
  }
}
