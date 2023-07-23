package com.miniproject.onlinemarketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Buyer;

public interface BuyerRepo extends JpaRepository<Buyer, Integer> {

    Buyer findByEmail(String email);

}
