import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = 'http://localhost:8080/restu/';
  constructor(private http: HttpClient) { }

  /*getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allorders`).pipe(
      map(
        response=> response
      )
    )
  }*/

  getOrders(page: number, size: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}ordersByPagin?pageNumber=${page}&pageSize=${size}`).pipe(
      map(
        response=> response
      )
    )
  }

  /*getOrdersByCategoryId(id: string | null): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }*/

  getOrdersByCategoryId(id: string | null, page: number, size: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}categoryByPagin?id=${id}&pageNumber=${page}&pageSize=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  /*getOrdersByWord(word: string | null): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orderByWord?word=${word}`).pipe(
        map(
            response => response
        )
    )
  }*/

  getOrdersByWord(word: string | null, page: number, size: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orderByWord?word=${word}&pageNumber=${page}&pageSize=${size}`).pipe(
        map(
            response => response
        )
    )
  }

  getOrderById(id :string | null): Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}order?id=${id}`).pipe(
        map(
            respons => respons
        )
    )
  }

  getTotalOrdersPageSize(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}orderSize`).pipe(
      map(
        respons => respons
      )
    )
  }

  getTotalOrderByCategotyId(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}categorySize?id=${id}`).pipe(
      map(
        respons => respons
      )
    )
  }

  getTotalOrderByWord(word: any): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}wordSize?word=${word}`).pipe(
      map(
        respons => respons
      )
    )
  }
}
