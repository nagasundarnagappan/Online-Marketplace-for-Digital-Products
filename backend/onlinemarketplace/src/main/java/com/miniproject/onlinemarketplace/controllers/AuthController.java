package com.miniproject.onlinemarketplace.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.Buyer;
import com.miniproject.onlinemarketplace.models.Seller;
import com.miniproject.onlinemarketplace.utility.LoginResponse;
import com.miniproject.onlinemarketplace.services.BuyerService;
import com.miniproject.onlinemarketplace.services.SellerService;
import com.miniproject.onlinemarketplace.utility.CustomUserDetailsService;
import com.miniproject.onlinemarketplace.utility.JwtUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final BuyerService buyerService;
    private final SellerService sellerService;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Value("${app.secret}")
    private String secret;

    @PostMapping("/buyer/login")
    public LoginResponse buyerLogin(@RequestBody @Valid Buyer buyer) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(buyer.getEmail(), buyer.getPassword()));
            System.out.println(secret);
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Buyer buy = new Buyer(0, secret, secret, secret, 0);
            if (userDetails instanceof Buyer) {
                buy = (Buyer) userDetails;
            }

            System.out.println(buy.toString());
            buyer = buyerService.getBuyerByEmail(buyer.getEmail());
            System.out.println(buyer.toString());
            String accessToken = jwtUtil.generateBToken(buy);
            LoginResponse response = new LoginResponse(true, "Login successful!", buyer.getBuyerId(), accessToken);
            return response;
        } catch (BadCredentialsException e) {
            System.out.println(e.getMessage());
            LoginResponse response = new LoginResponse(false, "Bad Credentials", -1, "");
            return response;
        }
    }

    @PostMapping("/seller/login")
    public LoginResponse sellerLogin(@RequestBody @Valid Seller seller) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(seller.getEmail(), seller.getPassword()));
            System.out.println(secret);
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Seller sel = new Seller(0, secret, secret, secret);
            if (userDetails instanceof Buyer) {
                sel = (Seller) userDetails;
            }

            String accessToken = jwtUtil.generateSToken(sel);

            System.out.println(sel.toString());
            seller = sellerService.getSellerByEmail(seller.getEmail());
            System.out.println(seller.toString());
            LoginResponse response = new LoginResponse(true, "Login successful!", seller.getSellerId(), accessToken);
            return response;
        } catch (BadCredentialsException e) {
            System.out.println(e.getMessage());
            LoginResponse response = new LoginResponse(false, "Bad Credentials", -1, "");
            return response;
        }
    }

    @PostMapping("/buyer/signup")
    public boolean buyerSignup(@RequestBody Buyer buyer) {
        return buyerService.buyerSignup(buyer);
    }

    @PostMapping("/seller/signup")
    public boolean sellerSignup(@RequestBody Seller seller) {
        return sellerService.sellerSignup(seller);
    }
}
