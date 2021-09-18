import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OrderHistory } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orderHistory: OrderHistory[] = [];
  userID: string = '';
  constructor(
    public auth: AuthService,
    private order:OrderService
    ) { }

  ngOnInit(): void {
    console.log("On init");
    this.auth.user$.subscribe(
      (profile) => {
        console.log("Subscribe")
        this.userID = profile?.sub as string
        console.log(`User id: ${this.userID}`);
        this.order.getOrder(this.userID).subscribe(res => {
          this.orderHistory = res;
          console.log(JSON.stringify(res));
        })
      }
    )
    console.log("End");
  }
}
