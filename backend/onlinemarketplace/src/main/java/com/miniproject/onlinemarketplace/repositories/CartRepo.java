package com.miniproject.onlinemarketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Cart;

public interface CartRepo extends JpaRepository<Cart, Integer> {

    Cart findByBuyerId(int buyerId);

}
