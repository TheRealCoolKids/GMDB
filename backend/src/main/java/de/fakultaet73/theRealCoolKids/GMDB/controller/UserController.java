package de.fakultaet73.theRealCoolKids.GMDB.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @PostMapping("user/{username}/watchlist")
    public ResponseEntity<List<Movie>> saveWatchList(@PathVariable String username, @RequestBody Long movieId) {

        Optional<User> user = this.userRepository.findByUsername(username);
        Optional<Movie> movie = this.movieRepository.findById(movieId);

        if (user.isPresent() && movie.isPresent()) {
            user.get().addToWatchList(movie.get());
            this.userRepository.save(user.get());
            return new ResponseEntity<>(user.get().getWatchList().stream().collect(Collectors.toList()), HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("user/{username}/watched")
    public ResponseEntity<List<Movie>> saveWatched(@PathVariable String username, @RequestBody Long movieId) {

        Optional<User> user = this.userRepository.findByUsername(username);
        Optional<Movie> movie = this.movieRepository.findById(movieId);

        if (user.isPresent() && movie.isPresent()) {
            user.get().addToWatchedList(movie.get());
            this.userRepository.save(user.get());
            return new ResponseEntity<>(user.get().getWatchedList().stream().collect(Collectors.toList()),
                    HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("user/{username}/watchlist")
    public ResponseEntity<Void> deleteWatchList(@PathVariable String username, @RequestBody Long movieId) {

        Optional<User> user = this.userRepository.findByUsername(username);
        Optional<Movie> movie = this.movieRepository.findById(movieId);

        if (user.isPresent() && movie.isPresent()) {
            user.get().deleteFromWatchList(movie.get());
            this.userRepository.save(user.get());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("user/{username}/watched")
    public ResponseEntity<Void> deleteWatched(@PathVariable String username, @RequestBody Long movieId) {

        Optional<User> user = this.userRepository.findByUsername(username);
        Optional<Movie> movie = this.movieRepository.findById(movieId);

        if (user.isPresent() && movie.isPresent()) {
            user.get().deleteFromWactedList(movie.get());
            this.userRepository.save(user.get());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.badRequest().build();
    }
}