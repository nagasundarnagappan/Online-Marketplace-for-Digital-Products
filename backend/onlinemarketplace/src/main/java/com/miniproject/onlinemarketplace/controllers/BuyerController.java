package com.miniproject.onlinemarketplace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Buyer;
import com.miniproject.onlinemarketplace.services.BuyerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BuyerController {

    @Autowired
    BuyerService buyerService;

    @GetMapping("/getbuyer/{id}")
    public Buyer getBuyerById(@PathVariable int id) {
        return buyerService.getBuyerById(id);
    }
}
