package com.spring.restaurant.controller;

import com.spring.restaurant.dto.OrderDto;
import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("restu")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/allorders")
    public List<Order> AllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/ordersByPagin")
    public List<Order> allOrdersByPagin(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return orderService.getOrdersByPagin(pageNumber, pageSize);
    }

    @GetMapping("/ordersByPagination")
    public OrderDto allOrdersByPagination(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return orderService.getOrdersByPagination(pageNumber, pageSize);
    }

    @GetMapping("/category")
    public List<Order> allOrdersByCategoryId(@RequestParam Long id) {
        return orderService.getOrdersByCategoryId(id);
    }

    @GetMapping("/categoryByPagin")
    public List<Order> allOrdersByCategoryIdPagin(@RequestParam Long id, @RequestParam int pageNumber, @RequestParam int pageSize) {
        return orderService.getOrdersByCategoryIdPagin(id, pageNumber, pageSize);
    }

    /*@GetMapping("/category/{id}")
    public List<Order> allOrdersByCategoryId(@PathVariable Long id) {
        return orderService.getOrdersByCategoryId(id);
    }*/

    @GetMapping("/orderByWord")
    public List<Order> getOrdersByWord(@RequestParam String word) {
        return orderService.getOrdersByWord(word);
    }

    @GetMapping("/orderByWordPagin")
    public List<Order> getOrdersByWordPagin(@RequestParam String word, @RequestParam int pageNumber, @RequestParam int pageSize) {
        return orderService.getOrdersByWordPagin(word, pageNumber, pageSize);
    }

    @GetMapping("/order")
    public Order getOrderById(@RequestParam Long id) {
        return orderService.getOrder(id);
    }

    @GetMapping("/orderSize")
    public long getTotalOrdersPageSize() {
        return orderService.getTotalOrdersPageSize();
    }

    @GetMapping("/categorySize")
    public long getTotalOrderByCategotyId(@RequestParam long id) {
        return orderService.getTotalOrderByCategotyId(id);
    }

    @GetMapping("/wordSize")
    public long getTotalOrderByWord(@RequestParam String word) {
        return orderService.getTotalOrderByWord(word);
    }
}
