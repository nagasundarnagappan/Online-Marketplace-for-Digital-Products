package com.miniproject.onlinemarketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
