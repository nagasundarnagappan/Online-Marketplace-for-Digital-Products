package com.miniproject.onlinemarketplace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Product;
import com.miniproject.onlinemarketplace.services.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/product/all")
    public List<Product> getAllProduct() {
        return productService.getAllProduct();
    }

    @PostMapping("/product/add")
    public boolean addProduct(@RequestBody Product product) {
        System.out.println(product);
        return productService.addProduct(product);
    }
}
