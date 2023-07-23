package com.miniproject.onlinemarketplace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Buyer;
import com.miniproject.onlinemarketplace.services.BuyerService;
import com.miniproject.onlinemarketplace.utility.LoginResponse;

@RestController
@CrossOrigin(origins = "*")
public class BuyerController {

    @Autowired
    BuyerService buyerService;

    @PostMapping("/buyer/login")
    public LoginResponse sellerLogin(@RequestBody Buyer buyer) {
        int res[] = buyerService.buyerLogin(buyer);
        if (res[0] == 1) {
            return new LoginResponse(false, "Buyer not found", -1);
        } else if (res[0] == 2) {
            return new LoginResponse(false, "Incorrect password", -1);
        } else {
            return new LoginResponse(true, "Login successful!", res[1]);
        }
    }

    @PostMapping("/buyer/signup")
    public boolean sellerSignup(@RequestBody Buyer buyer) {
        return buyerService.buyerSignup(buyer);
    }

    @GetMapping("/getbuyer/{id}")
    public Buyer getBuyerById(@PathVariable int id) {
        return buyerService.getBuyerById(id);
    }
}
