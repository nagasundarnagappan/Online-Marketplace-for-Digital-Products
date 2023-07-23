package com.miniproject.onlinemarketplace.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Buyer;
import com.miniproject.onlinemarketplace.models.Cart;
import com.miniproject.onlinemarketplace.repositories.BuyerRepo;
import com.miniproject.onlinemarketplace.repositories.CartRepo;

@Service
public class BuyerService {

    @Autowired
    BuyerRepo buyerRepo;

    @Autowired
    CartRepo cartRepo;

    public boolean buyerSignup(Buyer buyer) {
        // Cart c = cartRepo.save(new Cart(buyer.getBuyerId(), new
        // ArrayList<Integer>()));
        // buyer.setCartId(c.getCartId());
        int buyerId = buyerRepo.save(buyer).getBuyerId();
        Cart c = cartRepo.save(new Cart(buyerId, new ArrayList<Integer>()));
        buyer.setCartId(c.getCartId());
        return buyerRepo.saveAndFlush(buyer) != null;
    }

    public int[] buyerLogin(Buyer buyer) {
        Buyer buyerFromDb = buyerRepo.findByEmail(buyer.getEmail());

        if (buyerFromDb == null) {
            return new int[] { 1, -1 };
        }

        if (buyerFromDb.getPassword().equals(buyer.getPassword())) {
            return new int[] { 3, buyerFromDb.getBuyerId() };
        }

        return new int[] { 2, -1 };
    }

    public Buyer getBuyerById(int id) {
        return buyerRepo.findById(id).orElse(null);
    }
}
