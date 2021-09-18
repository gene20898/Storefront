import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from '../../environments/environment';

const API_HOST = environment.apiHost;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    const url = `${API_HOST}/products`;
    let res;
    try{
      res = this.http.get<Product[]>(url);
      return res
    }catch(e: any){
      alert(e.message);
    }
    return res as Observable<Product[]>;
  }
}
