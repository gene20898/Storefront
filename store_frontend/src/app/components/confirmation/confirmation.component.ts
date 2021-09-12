import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name:string = "";
  total:number = 0;
  constructor(private confirmService:ConfirmationService) { }

  ngOnInit(): void {
    this.total = this.confirmService.getDetail().total;
    this.name = this.confirmService.getDetail().name;
  }

}
