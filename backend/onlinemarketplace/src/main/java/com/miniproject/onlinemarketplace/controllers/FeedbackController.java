package com.miniproject.onlinemarketplace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.onlinemarketplace.models.FeedbackDto;
import com.miniproject.onlinemarketplace.services.FeedbackService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/feedback/post")
    public void postFeedback(@RequestBody FeedbackDto feedbackDto) {
        feedbackService.postFeedback(feedbackDto);
    }
}
