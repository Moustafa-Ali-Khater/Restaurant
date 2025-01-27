import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss']
})
export class SearchOrderComponent implements OnInit {

  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
  this.router.navigateByUrl('/orders/' + value)
  }
}
