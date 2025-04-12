package com.naveen.amazon.service;

import com.naveen.amazon.model.Product;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    public List<Product> getProducts() {
        return Arrays.asList(
            new Product(1, "iPad", 499, "box7.jpg"),
            new Product(2, "Laptop", 799, "box-img2.jpg")
        );
    }
    
}
