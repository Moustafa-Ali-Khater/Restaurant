package com.spring.restaurant.model;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class CategoryOrder extends BaseEntity{

    @Column(name = "name")
    private String name;

    @CreationTimestamp
    @Column(name = "data_Create")
    private Date dateCreate;

    @UpdateTimestamp
    @Column(name = "data_Update")
    private Date dateUpdate;
}
