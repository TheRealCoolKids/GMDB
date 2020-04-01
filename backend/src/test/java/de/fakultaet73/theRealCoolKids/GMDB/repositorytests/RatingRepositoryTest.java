package de.fakultaet73.theRealCoolKids.GMDB.repositorytests;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.model.Role;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

/**
 * RatingRepositoryTest
 */
@DataJpaTest
@Transactional
public class RatingRepositoryTest {

    Movie movie;
    Rating rating1, rating2, rating3;
    User user1, user2;

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void init() {
        movie = new Movie("Movie title", 1999, Genre.ACTION, 666);
      
        rating1 = new Rating(3);
        rating2 = new Rating(2);
        rating3 = new Rating(5);
      
        user1 = new User("Artur", "IchMagBratwurst");
        user1.getRole().add(Role.ADMIN);
        user2 = new User("chris", "ChrisIsCool");
        user2.getRole().add(Role.ADMIN);
        user2.getRole().add(Role.REVIEWER);
    }

    @Test
    void shouldSaveARating() {

        Rating expected = this.ratingRepository.save(this.rating1);
        Optional<Rating> actual = this.ratingRepository.findById(this.rating1.getId());
       
        assertThat(actual.isPresent()).isTrue();
        assertThat(actual.get().getId()).isEqualTo(expected.getId());
    }

    @Test
    void shouldUpdateARating() {

        this.ratingRepository.save(rating1);
        Rating expected = this.ratingRepository.findById(rating1.getId()).get();
        expected.setScore(0);
        this.ratingRepository.save(expected);
        Rating actual = this.ratingRepository.findById(expected.getId()).get();

        assertThat(actual.getScore()).isEqualTo(expected.getScore());
    }

    @Test
    void whenFindByUserReturnRatingByUser() {

        this.userRepository.save(user1);
        this.userRepository.save(user2);

        rating1.setUser(user1);
        rating2.setUser(user1);
        rating3.setUser(user2);

        this.ratingRepository.save(rating1);
        this.ratingRepository.save(rating2);
        this.ratingRepository.save(rating3);

        List<Rating> actual = this.ratingRepository.findByUser(user1);

        assertThat(actual).hasSize(2);
        assertThat(actual).contains(rating1);
        assertThat(actual).contains(rating2);
    }

    @Test
    void whenUserIsDeletedAllItsRelatedRatingsShouldNotBeDeleted() {

        this.userRepository.save(user1);
        this.userRepository.save(user2);

        rating1.setUser(user1);
        rating2.setUser(user1);
        rating3.setUser(user2);

        this.ratingRepository.save(rating1);
        this.ratingRepository.save(rating2);
        this.ratingRepository.save(rating3);

        this.userRepository.delete(user1);

        List<Rating> actual = this.ratingRepository.findAll();

        assertThat(actual).hasSize(3);
        assertThat(actual).contains(rating3);
        assertThat(actual).contains(rating2);
        assertThat(actual).contains(rating1);
    }

}