import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order, OrderHistory } from '../models/Order';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    console.log(`Create order: ${order}`);
    const url = `${API_HOST}/orders`;
    console.log(`${JSON.stringify(order)}`)
    let res
    try{
      console.log(url);
      res = this.http.post<Order>(url, order);
      return res
    }catch(e: any){
      alert(e.message);
    }
    return res as Observable<Order>;
  }

  getOrder(user_id: string): Observable<OrderHistory[]> {
    console.log(`userId: {"user_id":"${user_id}"}`);
    const url = `${API_HOST}/order_history`;
    let res;
    try{
      res = this.http.post<OrderHistory[]>(url, JSON.parse(`{"user_id":"${user_id}"}`));
      return res
    }catch(e: any){
      alert(e.message);
    }
    return res as Observable<OrderHistory[]>;
  }
}
