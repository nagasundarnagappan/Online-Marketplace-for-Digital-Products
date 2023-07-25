package com.miniproject.onlinemarketplace.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Seller;

public interface SellerRepo extends JpaRepository<Seller, Integer> {

    Optional<Seller> findByEmail(String email);

}
