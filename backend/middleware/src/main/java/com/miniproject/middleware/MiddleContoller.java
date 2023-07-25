package com.miniproject.middleware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MiddleContoller {

    @Autowired
    private MiddleService middleService;

    @PostMapping("/postFeedback")
    public String[] getFeedback(@RequestBody FeedbackDto FeedbackDto) {
        return middleService.sendFeedback(FeedbackDto);
    }
}