package com.miniproject.onlinemarketplace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Seller;
import com.miniproject.onlinemarketplace.services.SellerService;
import com.miniproject.onlinemarketplace.utility.LoginResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SellerController {

    @Autowired
    SellerService sellerService;

    @PostMapping("/seller/login")
    public LoginResponse sellerLogin(@RequestBody Seller seller) {
        int res[] = sellerService.sellerLogin(seller);
        if (res[0] == 1 || res[0] == 2) {
            return new LoginResponse(false, "Bad Credentials", -1, "");
        } else {
            return new LoginResponse(true, "Login successful!", res[1], "");
        }
    }

    @PostMapping("/seller/signup")
    public boolean sellerSignup(@RequestBody Seller seller) {
        return sellerService.sellerSignup(seller);
    }

    @GetMapping("/getseller/{id}")
    public Seller getSellerById(@PathVariable int id) {
        return sellerService.getSellerById(id);
    }
}
