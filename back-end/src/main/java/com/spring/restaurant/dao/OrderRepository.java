package com.spring.restaurant.dao;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    public List<Order>findByCategoryId(Long id);

    public Page<Order>findByCategoryId(Long id, Pageable pageable);

    public List<Order>findByNameContaining(String name);

    public Page<Order> findByNameContaining(String name, Pageable pageable);

    @Query("select count (id) from Order where category.id = ?1")
    public long getTotalOrderByCategotyId(long id);

    @Query("select count (id) from Order where name LIKE %?1%")
    public long getTotalOrderByword(String word);
}
