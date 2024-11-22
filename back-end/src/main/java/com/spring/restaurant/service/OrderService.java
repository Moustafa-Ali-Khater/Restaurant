package com.spring.restaurant.service;

import com.spring.restaurant.dao.OrderRepository;
import com.spring.restaurant.dto.OrderDto;
import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Order> getOrdersByPagin(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return orderRepository.findAll(pageable).getContent();
    }

    public OrderDto getOrdersByPagination(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Order> orders = orderRepository.findAll(pageable).getContent();
        long totalOrders = orderRepository.count();
        return new OrderDto(orders, totalOrders);
    }

    public List<Order> getOrdersByCategoryId(Long id) {
        return orderRepository.findByCategoryId(id);
    }

    public List<Order> getOrdersByCategoryIdPagin(Long id, int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return orderRepository.findByCategoryId(id, pageable).getContent();
    }

    public List<Order> getOrdersByWord(String word) {
        return orderRepository.findByNameContaining(word);
    }

    public List<Order> getOrdersByWordPagin(String word, int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return orderRepository.findByNameContaining(word, pageable).getContent();
    }

    public Order getOrder(Long id) {
        return orderRepository.findById(id).get();
    }

    public long getTotalOrdersPageSize() {
        return orderRepository.count();
    }

    public long getTotalOrderByCategotyId(long id) {
        return orderRepository.getTotalOrderByCategotyId(id);
    }

    public long getTotalOrderByWord(String word) {
        return orderRepository.getTotalOrderByword(word);
    }

}
