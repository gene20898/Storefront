import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  removeItem(product: Product): void {
    const id = product.id;
    this.cart = this.cart.filter(item => { return item.id != id })
  }

  addCart(product: Product): void {
    const findingItem = this.getItemById(product.id);
    if (findingItem == undefined) {
      this.cart.push(product);
    }
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  getItemById(id:number): Product|undefined{
    return this.cart.find(item => { return item.id === id });
  }
}
