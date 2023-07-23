package com.miniproject.onlinemarketplace.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

    List<Product> findByOwnerId(int i);

    List<Product> findBySellerId(int id);

}
