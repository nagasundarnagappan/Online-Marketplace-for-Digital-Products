package com.miniproject.onlinemarketplace.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Cart;
import com.miniproject.onlinemarketplace.models.Product;
import com.miniproject.onlinemarketplace.repositories.CartRepo;

@Service
public class CartService {

    @Autowired
    CartRepo cartRepo;

    @Autowired
    ProductService productService;

    public boolean addProductToCart(int buyerId, int productId) {
        Cart cart = cartRepo.findByBuyerId(buyerId);

        List<Integer> products = cart.getProducts();
        products.add(productId);

        cart.setProducts(products);

        return cartRepo.saveAndFlush(cart) != null;
    }

    public boolean removeProductFromCart(int buyerId, int productId) {
        Cart cart = cartRepo.findByBuyerId(buyerId);

        List<Integer> products = cart.getProducts();
        products.remove(Integer.valueOf(productId));

        cart.setProducts(products);

        return cartRepo.saveAndFlush(cart) != null;
    }

    public boolean clearCart(int buyerId) {
        Cart cart = cartRepo.findByBuyerId(buyerId);

        if (cart != null) {
            List<Integer> products = cart.getProducts();
            products.clear();
            cart.setProducts(products);
            return cartRepo.saveAndFlush(cart) != null;
        }

        return false;
    }

    public boolean checkout(int buyerId) {

        Cart cart = cartRepo.findByBuyerId(buyerId);

        if (cart != null) {
            List<Integer> products = cart.getProducts();

            for (int productId : products) {
                productService.updateProductOwner(productId, buyerId);
            }

            products.clear();
            cart.setProducts(products);
            return cartRepo.saveAndFlush(cart) != null;
        }

        return false;
    }

    public List<Integer> getAllProductInCart(int buyerId) {
        return cartRepo.findByBuyerId(buyerId).getProducts();
    }

    public Product getProductById(int id) {
        return productService.getProductById(id);
    }

    public Cart getCartByBuyerId(int buyerId) {
        return cartRepo.findByBuyerId(buyerId);
    }
}
