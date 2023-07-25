package com.miniproject.microservices.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.miniproject.microservices.models.FeedbackDto;

@Service
public class FeedbackService {

    public boolean addFeedback(FeedbackDto feedbackDto) {
        RestTemplate restTemplate = new RestTemplate();

        HttpEntity<FeedbackDto> entity = new HttpEntity<>(feedbackDto);

        try {
            String response = restTemplate
                    .exchange("http://localhost:8100/postFeedback", HttpMethod.POST, entity, String.class)
                    .getBody();
            System.out.println(response);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
