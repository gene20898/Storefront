import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  name: string = '';
  total: number =  0;

  constructor() { }

  confirm(name: string, total: number): void{
    this.name = name;
    this.total = total;
  }

  getDetail(): {name:string , total: number}{
    return {name:this.name, total:this.total};
  }
}
