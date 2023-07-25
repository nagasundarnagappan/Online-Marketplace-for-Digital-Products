package com.miniproject.middleware;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MiddleService {
    private RestTemplate restTemplate;

    public MiddleService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String[] sendFeedback(FeedbackDto feedbackDto) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + feedbackDto.getAccessToken());

        HttpEntity<FeedbackDto> entity = new HttpEntity<>(feedbackDto, headers);

        try {
            String response = restTemplate
                    .exchange("http://localhost:8080/feedback/post", HttpMethod.POST, entity, String.class)
                    .getBody();
            return new String[] { "true", response };
        } catch (Exception e) {
            return new String[] { "false", e.getMessage() };
        }

    }
}
