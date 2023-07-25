package com.miniproject.onlinemarketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.onlinemarketplace.models.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
