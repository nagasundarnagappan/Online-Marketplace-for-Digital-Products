package com.miniproject.onlinemarketplace.utility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Buyer;
import com.miniproject.onlinemarketplace.models.Seller;
import com.miniproject.onlinemarketplace.repositories.BuyerRepo;
import com.miniproject.onlinemarketplace.repositories.SellerRepo;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private BuyerRepo buyerRepo;

    @Autowired
    private SellerRepo sellerRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Buyer buyer = buyerRepo.findByEmail(username).orElse(null);
        if (buyer != null) {
            return buyer;
        }

        Seller seller = sellerRepo.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));
        return seller;
    }
}
