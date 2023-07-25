package com.miniproject.onlinemarketplace.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Buyer;

public interface BuyerRepo extends JpaRepository<Buyer, Integer> {

    Optional<Buyer> findByEmail(String email);

}
