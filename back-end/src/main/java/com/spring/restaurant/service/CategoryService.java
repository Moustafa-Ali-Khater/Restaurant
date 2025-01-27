package com.spring.restaurant.service;

import com.spring.restaurant.dao.CategoryRepository;
import com.spring.restaurant.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getallCategory() {
        return categoryRepository.findAll();
    }
}
