package de.fakultaet73.theRealCoolKids.GMDB.repositorytests;

import static org.assertj.core.api.Assertions.assertThat;


import java.util.Optional;
import javax.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Role;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@DataJpaTest
@Transactional
public class UserRepositoryTest {

    Movie movie1, movie2;

    User user1, user2;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;
    
    @BeforeEach
    void init() {
     
        user1 = new User("Artur", "IchMagBratwurst");
        user1.getRole().add(Role.ADMIN);
        user2 = new User("chris", "ChrisIsCool");
        user2.getRole().add(Role.ADMIN);
        user2.getRole().add(Role.REVIEWER);
        
        movie1 = new Movie("Movie title 1", 1999, Genre.ACTION, 666);
        movie2 = new Movie("Movie title 2", 1545, Genre.COMEDY, 666);
    }

    @Test
    void canSaveUser() {

        User expected = this.userRepository.save(this.user1);
        Optional<User> actual = this.userRepository.findById(expected.getId());

        assertThat(actual.isPresent()).isTrue();
        assertThat(actual.get().getId()).isEqualTo(expected.getId());

    }

    @Test
    void shouldSaveAMovieToWatchList(){
        
        this.userRepository.save(user1);
        assertThat(this.user1.getWatchList()).isEmpty();

        this.movieRepository.save(movie1);
        this.movieRepository.save(movie2);
        
        
        this.user1.getWatchList().add(movie1);
        this.user1.getWatchList().add(movie2);
        this.userRepository.save(user1);
        User actual = this.userRepository.findById(user1.getId()).get();
        
        assertThat(actual.getWatchList()).hasSize(2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
        assertThat(actual.getWatchList()).contains(movie1);
        assertThat(actual.getWatchList()).contains(movie2);
    }

    @Test
    void shouldDeleteAMovieFromWatchList() {
        
        this.userRepository.save(user1);
        this.movieRepository.save(movie1);
        this.movieRepository.save(movie2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
        
        this.user1.getWatchList().add(movie1);
        this.user1.getWatchList().add(movie2);
        this.userRepository.save(user1);
        
        this.user1.getWatchList().remove(movie1);
        this.userRepository.save(user1);
        User actual = this.userRepository.findById(user1.getId()).get();

        assertThat(actual.getWatchList()).hasSize(1);
        assertThat(actual.getWatchList()).contains(movie2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
    }

    @Test
    void shouldSaveAMovieToWatchedList(){
        
        this.userRepository.save(user1);
        assertThat(this.user1.getWatchedList()).isEmpty();

        this.movieRepository.save(movie1);
        this.movieRepository.save(movie2);

        this.user1.getWatchedList().add(movie1);
        this.user1.getWatchedList().add(movie2);
        this.userRepository.save(user1);
        User actual = this.userRepository.findById(user1.getId()).get();
        
        assertThat(actual.getWatchedList()).hasSize(2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
        assertThat(actual.getWatchedList()).contains(movie1);
        assertThat(actual.getWatchedList()).contains(movie2);
    }

    @Test
    void shouldDeleteAMovieFromWatchedList() {
        
        this.userRepository.save(user1);
        this.movieRepository.save(movie1);
        this.movieRepository.save(movie2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
        
        this.user1.getWatchedList().add(movie1);
        this.user1.getWatchedList().add(movie2);
        this.userRepository.save(user1);
        
        this.user1.getWatchedList().remove(movie1);
        this.userRepository.save(user1);
        User actual = this.userRepository.findById(user1.getId()).get();

        assertThat(actual.getWatchedList()).hasSize(1);
        assertThat(actual.getWatchedList()).contains(movie2);
        assertThat(this.movieRepository.findAll()).hasSize(2);
    }


}