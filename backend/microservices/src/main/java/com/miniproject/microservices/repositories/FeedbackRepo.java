package com.miniproject.microservices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.microservices.models.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
