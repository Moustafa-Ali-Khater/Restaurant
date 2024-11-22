import { Order } from "./order";

export class CardOrder {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(order: Order) {
    this.id = order.id;
    this.name = order.name;
    this.price = order.price;
    this.quantity = 1;
  }
}
