package com.miniproject.microservices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.microservices.models.Feedback;
import com.miniproject.microservices.repositories.FeedbackRepo;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public boolean addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback) != null;
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    public Feedback getFeedbackById(int id) {
        return feedbackRepo.findById(id).get();
    }
}
