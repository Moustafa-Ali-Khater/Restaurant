import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardOrder } from 'src/app/model/card-order';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent {

  orders: Order[] = [];
  page: number = 1;
  pageSize: number = 5;
  orderSize: number = 0;
  constructor(private orderService: OrderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
        ()=> {
          this.ordersBy();
        }
    )
  }

  ordersBy() {
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('word');
    if (result1) {
      this.getOrderByCategoryId();
    } else if (result2) {
      this.getAllOrdersContainingWord();
    } else {
      this.getOrders();
    }
  }

  getOrders() {
    this.orderService.getTotalOrdersPageSize().subscribe(
      data => this.orderSize = data
    )
    this.orderService.getOrders(this.page - 1, this.pageSize).subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    })
  }

  getOrderByCategoryId() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
      let numericCategoryId = +categoryId;
      this.orderService.getTotalOrderByCategotyId(numericCategoryId).subscribe(
        (data) => {
          this.orderSize = data;
        }
      );
      this.orderService.getOrdersByCategoryId(categoryId, this.page - 1, this.pageSize).subscribe({
        next: data => {
          this.orders = data
        },
        error: (err) => {
          console.error('Error fetching orders:', err);
        }
      })
    } else {
      console.error('Category ID is missing or invalid.');
    }

  }

  getAllOrdersContainingWord() {
    let word = this.route.snapshot.paramMap.get('word');
      this.orderService.getTotalOrderByWord(word).subscribe(
        (data) => {
          this.orderSize = data;
          console.log(data);

        }
      )
      this.orderService.getOrdersByWord(word, this.page - 1, this.pageSize).subscribe({
        next: data => {
          this.orders = data
        },
        error: (err) => {
          console.error('Error fetching orders:', err);
        }
      })
  }

  doing() {
    this.ordersBy();
  }

  onChangepageSize($event: Event) {
    // console.log(+(<HTMLInputElement>$event.target).value);
    this.pageSize = +(<HTMLInputElement>$event.target).value;
    this.ordersBy();
  }

  addToCard(temp: Order) {
    // console.log(temp);
    const cardOrder = new CardOrder(temp);
    console.log(cardOrder);
  }
}
