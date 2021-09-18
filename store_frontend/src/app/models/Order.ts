import { Observable } from "rxjs";
import { User } from '@auth0/auth0-spa-js';

export class Order {
    status: string;
    user_id: string;
    product_list: {quantity:number, product_id:number}[];
    constructor(){
        this.status = '';
        this.user_id = '';
        this.product_list = [];
    }
}

export class OrderHistory {
    order: {id: number, status: string, user_id: string};
    product_list: {id: number, order_id: number, product_id: number, quantity: number}[];
    constructor(){
        this.order = {id: 0, status: '', user_id: ''};
        this.product_list = [];
    }
}

export interface authUser extends Observable<User> {
    user_id: string
  }