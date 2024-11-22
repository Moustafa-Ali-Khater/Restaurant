package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category extends CategoryOrder {

    @Column(name = "categorylogo")
    private String logo;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Order> orders;
}
