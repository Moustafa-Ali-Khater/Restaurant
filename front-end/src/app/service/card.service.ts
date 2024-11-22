import { Injectable } from '@angular/core';
import { CardOrder } from '../model/card-order';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  orders: CardOrder[] = [];
  totalOrders: number = 0;
  totalPrice: number = 0;

  constructor() { }

  /*addOrdweToCard(order: CardOrder) {
    if (this.orders.length > 0) {
      for (let temp of this.orders) {
        if (temp.id === order.id) {
          temp.quantity += order.quantity;
        } else {
          this.orders.push(order);
        }
      }
    } else {
      this.orders.push(order);
    }
  }*/

  addOrderToCart(order: CardOrder){
    let isExist: boolean = false;
    let existOrder :CardOrder = undefined;
    if(this.orders.length > 0){
      /*for(let temp of this.orders){
        if(temp.id === order.id){
          existOrder = temp;
          break;
        }
      }*/
      existOrder = this.orders.find(temp =>temp.id === order.id);
    }
    isExist = (existOrder != undefined); // true   false
      if(isExist){
      existOrder.quantity++;
    }else {
      this.orders.push(order)
    }
      console.log(this.orders)
      this.calculateTotals();
  }
  calculateTotals() {
    let totalElementsSizeOrder: number = 0;
    let totalPriceOrders: number = 0;
    for (let temp of this.orders) {
      totalElementsSizeOrder += temp.quantity; // totalElementsSizeOrder = totalElementsSizeOrder +temp.quantity;
      totalPriceOrders += temp.quantity * temp.price;
    }
    this.totalOrders.next(totalElementsSizeOrder);
    this.totalPrice.next(totalPriceOrders);
    console.log("Size = " + this.totalOrders)
    console.log("Price = " + this.totalPrice)
  }

  removeOrder(order: CardOrder){
    order.quantity--;
    if(order.quantity === 0){
      this.remove(order)
    } else {
      this.calculateTotals()
    }
  }
  remove(order: CardOrder){
    const index = this.orders.findIndex(temp => temp.id === order.id) // index or -1
    if(index > -1){
      this.orders.splice(index,1)
      this.calculateTotals()
    }
  }
}
