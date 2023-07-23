package com.miniproject.onlinemarketplace.controllers;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Product;
import com.miniproject.onlinemarketplace.services.CartService;

@RestController
@CrossOrigin(origins = "*")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/getAllProductInCart/{buyerId}")
    public List<Product> getAllProductInCart(@PathVariable int buyerId) {
        List<Integer> ids = cartService.getAllProductInCart(buyerId);
        List<Product> products = new ArrayList<Product>();
        for (int id : ids) {
            products.add(cartService.getProductById(id));
        }
        return products;

    }

    @GetMapping("/addProductToCart/{buyerId}/{productId}")
    public boolean addProductToCart(@PathVariable int buyerId, @PathVariable int productId) {
        if (cartService.getCartByBuyerId(buyerId).getProducts().contains(productId)) {
            return false;
        }
        return cartService.addProductToCart(buyerId, productId);
    }

    @GetMapping("/removeProductFromCart/{buyerId}/{productId}")
    public boolean removeProductFromCart(@PathVariable int buyerId, @PathVariable int productId) {
        return cartService.removeProductFromCart(buyerId, productId);
    }

    @GetMapping("/clearCart/{buyerId}")
    public boolean clearCart(@PathVariable int buyerId) {
        return cartService.clearCart(buyerId);
    }

    @GetMapping("/checkout/{buyerId}")
    public boolean checkout(@PathVariable int buyerId) {
        return cartService.checkout(buyerId);
    }
}