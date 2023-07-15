package com.miniproject.onlinemarketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Seller;

public interface SellerRepo extends JpaRepository<Seller, Integer> {

    Seller findByEmail(String email);

}
