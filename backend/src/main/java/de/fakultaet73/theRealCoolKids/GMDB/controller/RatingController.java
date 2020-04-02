package de.fakultaet73.theRealCoolKids.GMDB.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;

@RestController
public class RatingController {

    @Autowired
    RatingRepository ratingRepository;

    @PutMapping("/ratings")
    public ResponseEntity<Rating> updateRating(@RequestBody Rating rating) {

        if (this.ratingRepository.findById(rating.getId()).isPresent()) {
            Rating updatedRating = this.ratingRepository.save(rating);
            return new ResponseEntity<>(updatedRating, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
}