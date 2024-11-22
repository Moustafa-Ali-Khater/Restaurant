import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent implements OnInit{

  orderquantity: number = 0;
  orderPrice: number = 0;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getOrderStatus();
  }

  getOrderStatus() {
    this.orderquantity = this.cardService.totalOrder;
    this.orderPrice = this.cardService.totalPrice;
  }

}
