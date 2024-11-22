import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './componants/card-status/card-status.component';

const routes: Routes = [
  {path: '', redirectTo: '/orders', pathMatch: 'full'},
  {path: 'category/:id', component: OrderItemsComponent},
  {path: 'category', component: OrderItemsComponent},
  {path: 'order/:id', component: OrderDetailsComponent},
  {path: 'orders/:word', component: OrderItemsComponent},
  {path: 'orders', component: OrderItemsComponent},
  {path: '**', redirectTo: '/orders', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryItemsComponent,
    OrderItemsComponent,
    DropdownMenuComponent,
    OrderDetailsComponent,
    SearchOrderComponent,
    CardStatusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
