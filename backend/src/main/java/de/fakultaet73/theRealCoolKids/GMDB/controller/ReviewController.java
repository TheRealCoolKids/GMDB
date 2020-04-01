package de.fakultaet73.theRealCoolKids.GMDB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/reviews/{username}")
    public List<Review> getReviewByUser(@PathVariable String username) {
        User user = userRepository.findByUsername(username);
        return this.reviewRepository.findByUser(user);
    }

    @PutMapping("/reviews")
    public ResponseEntity<Review> updateReview(@RequestBody Review review) {

        if (this.reviewRepository.findById(review.getId()).isPresent()) {
            Review updatedReview = this.reviewRepository.save(review);
            return new ResponseEntity<>(updatedReview, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }
}