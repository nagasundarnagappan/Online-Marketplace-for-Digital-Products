package com.miniproject.onlinemarketplace.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Seller;
import com.miniproject.onlinemarketplace.repositories.SellerRepo;

@Service
public class SellerService {

    @Autowired
    SellerRepo sellerRepo;

    public boolean sellerSignup(Seller seller) {
        return sellerRepo.save(seller) != null;
    }

    public int[] sellerLogin(Seller seller) {
        Seller sellerFromDb = sellerRepo.findByEmail(seller.getEmail());

        if (sellerFromDb == null) {
            return new int[] { 1, -1 };
        }

        if (sellerFromDb.getPassword().equals(seller.getPassword())) {
            return new int[] { 3, sellerFromDb.getSellerId() };
        }

        return new int[] { 2, -1 };
    }

    public Seller getSellerById(int id) {
        return sellerRepo.findById(id).get();
    }
}
