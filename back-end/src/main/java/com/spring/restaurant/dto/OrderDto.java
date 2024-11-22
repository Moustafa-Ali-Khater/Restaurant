package com.spring.restaurant.dto;

import com.spring.restaurant.model.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private List<Order> orders;
    private long totalOrders;
}
