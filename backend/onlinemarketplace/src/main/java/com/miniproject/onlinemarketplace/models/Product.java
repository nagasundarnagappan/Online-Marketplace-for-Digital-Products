package com.miniproject.onlinemarketplace.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;

    private String productName;

    private String productDescription;

    private float productPrice;

    private String category;

    private String fileLocation;

    private int sellerId;

    @Override
    public String toString() {
        return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
                + productDescription + ", productPrice=" + productPrice + ", category=" + category + ", fileLocation="
                + fileLocation + ", sellerId=" + sellerId + "]";
    }
}
