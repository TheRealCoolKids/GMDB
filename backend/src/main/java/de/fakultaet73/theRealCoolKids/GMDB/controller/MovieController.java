package de.fakultaet73.theRealCoolKids.GMDB.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;

/**
 * MovieController
 */
@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {

        return this.movieRepository.findAll();
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable long id) {

        Optional<Movie> movie = this.movieRepository.findById(id);
        if (movie.isPresent())
            return ResponseEntity.notFound().build();
        return new ResponseEntity<>(movie.get(), HttpStatus.OK);
    }

    @PutMapping("/movies")
    public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie) {

        if (this.movieRepository.findById(movie.getId()).isPresent()) {
            Movie updatedMovie = this.movieRepository.save(movie);
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/movies")
    public ResponseEntity<Movie> saveMovie(@RequestBody Movie movie) {
        Movie savedMovie = this.movieRepository.save(movie);
        return new ResponseEntity<>(savedMovie, HttpStatus.OK);
    }

    @PostMapping("/reviews/{id}")
    public ResponseEntity<Movie> saveReviews(@PathVariable Long id, @RequestBody Review review) {
        Optional<Movie> movie = this.movieRepository.findById(id);
        if (movie.isPresent()) {
            movie.get().addReview(review);
            Movie updatedMovie = this.movieRepository.save(movie.get());
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id, @RequestBody Review review) {
        Optional<Movie> movie = this.movieRepository.findById(id);
        if (movie.isPresent()) {
            movie.get().deleteReview(review);
            this.movieRepository.save(movie.get());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();

    }
}