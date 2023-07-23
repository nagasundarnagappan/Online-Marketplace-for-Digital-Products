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
        product.setOwnerId(-1);
        return productRepo.save(product) != null;
    }

    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.findById(id).orElse(null);
    }

    public List<Product> getAllProductWithNoOwner() {
        return productRepo.findByOwnerId(-1);
    }

    public void updateProductOwner(int productId, int buyerId) {
        Product product = productRepo.findById(productId).orElse(null);
        product.setOwnerId(buyerId);
        productRepo.saveAndFlush(product);
    }

    public List<Product> getAllProductByBuyerId(int id) {
        return productRepo.findByOwnerId(id);
    }

    public List<Product> getAllProductBySellerId(int id) {
        return productRepo.findBySellerId(id);
    }
}