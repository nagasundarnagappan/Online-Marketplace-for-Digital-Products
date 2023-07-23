package com.miniproject.onlinemarketplace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Product;
import com.miniproject.onlinemarketplace.services.ProductService;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products/all")
    public List<Product> getAllProductWithNoOwner() {
        return productService.getAllProductWithNoOwner();
    }

    @PostMapping("/product/add")
    public boolean addProduct(@RequestBody Product product) {
        System.out.println(product);
        return productService.addProduct(product);
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/products/buyer/{id}")
    public List<Product> getAllProductByBuyerId(@PathVariable int id) {
        return productService.getAllProductByBuyerId(id);
    }

    @GetMapping("/products/seller/{id}")
    public List<Product> getAllProductBySellerId(@PathVariable int id) {
        return productService.getAllProductBySellerId(id);
    }
}
