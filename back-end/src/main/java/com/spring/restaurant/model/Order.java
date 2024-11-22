package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends CategoryOrder {

    @Column(name = "price")
    private int price;

    @Column(name = "image")
    private String img;

    @Lob
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn (name = "id_Category")
    private Category category;
}
