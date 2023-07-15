package com.miniproject.onlinemarketplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Product;
import com.miniproject.onlinemarketplace.repositories.ProductRepo;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public boolean addProduct(Product product) {
        return productRepo.save(product) != null;
    }

    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }
}
