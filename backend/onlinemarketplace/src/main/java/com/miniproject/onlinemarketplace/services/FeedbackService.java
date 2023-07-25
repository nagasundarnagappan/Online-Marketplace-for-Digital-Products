package com.miniproject.onlinemarketplace.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.onlinemarketplace.models.Feedback;
import com.miniproject.onlinemarketplace.models.FeedbackDto;
import com.miniproject.onlinemarketplace.repositories.FeedbackRepo;

@Service
public class FeedbackService {

    @Autowired
    FeedbackRepo feedbackRepo;

    public void postFeedback(FeedbackDto feedbackDto) {
        Feedback feedback = new Feedback(feedbackDto.getEmail(), feedbackDto.getMessage());
        feedbackRepo.save(feedback);
    }

}
