import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  order!: Order;
  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              /*private cartService: CartServiceService*/) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe({
      next: (data) => {
        this.order = data;
      },
      error(err) {
          console.error('Error fetching order:', err);
      },
    })
  }

  allOrders() {
    this.router.navigateByUrl('/orders')
  }

  // addToCard(order: Order) {
  //   const orderCart = new CartOrder(order);
  //   this.cartService.addOrderToCart(orderCart);
  // }
}
