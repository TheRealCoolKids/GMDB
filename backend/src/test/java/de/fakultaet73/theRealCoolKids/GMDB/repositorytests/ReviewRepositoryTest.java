package de.fakultaet73.theRealCoolKids.GMDB.repositorytests;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.model.Role;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

/**
 * ReviewRepositoryTest
 */
@DataJpaTest
@Transactional
public class ReviewRepositoryTest {

    Movie movie;
    Review review1, review2, review3;
    User user1, user2;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void init() {
        movie = new Movie("Movie title", 1999, Genre.ACTION, 666);

        review1 = new Review("title 1", LocalDate.now(), "text 1");
        review2 = new Review("title 2", LocalDate.now(), "text 2");
        review3 = new Review("title 3", LocalDate.now(), "text 3");

        user1 = new User("Artur", "IchMagBratwurst");
        user1.getRole().add(Role.ADMIN);
        user2 = new User("chris", "ChrisIsCool");
        user2.getRole().add(Role.ADMIN);
        user2.getRole().add(Role.REVIEWER);
    }

    @Test
    void shouldSaveAReview() {

        Review expected = this.reviewRepository.save(this.review1);
        Optional<Review> actual = this.reviewRepository.findById(this.review1.getId());
      
        assertThat(actual.isPresent()).isTrue();
        assertThat(actual.get().getId()).isEqualTo(expected.getId());
    }

    @Test
    void shouldUpdateAReview() {
        this.reviewRepository.save(review1);
        Review expected = this.reviewRepository.findById(review1.getId()).get();
        expected.setText("New Text");
        expected.setTitle("New Title");
        expected.setCreationDate(LocalDate.now().plusDays(3L));
        this.reviewRepository.save(expected);
        Review actual = this.reviewRepository.findById(expected.getId()).get();

        assertThat(actual.getText()).isEqualTo(expected.getText());
        assertThat(actual.getTitle()).isEqualTo(expected.getTitle());
        assertThat(actual.getCreationDate()).isEqualTo(expected.getCreationDate());

    }

    @Test
    void whenFindByUserReturnReviewsByUser() {

        this.userRepository.save(user1);
        this.userRepository.save(user2);

        review1.setUser(user1);
        review2.setUser(user1);
        review3.setUser(user2);

        this.reviewRepository.save(review1);
        this.reviewRepository.save(review2);
        this.reviewRepository.save(review3);

        List<Review> actual = this.reviewRepository.findByUser(user1);

        assertThat(actual).hasSize(2);
        assertThat(actual).contains(review1);
        assertThat(actual).contains(review2);
    }

    @Test
    void whenUserIsDeletedAllItsRelatedReviewsShouldNotBeDeleted() {

        this.userRepository.save(user1);
        this.userRepository.save(user2);

        review1.setUser(user1);
        review2.setUser(user1);
        review3.setUser(user2);

        this.reviewRepository.save(review1);
        this.reviewRepository.save(review2);
        this.reviewRepository.save(review3);

        this.userRepository.delete(user1);

        List<Review> actual = this.reviewRepository.findAll();

        assertThat(actual).hasSize(3);
        assertThat(actual).contains(review3);
        assertThat(actual).contains(review2);
        assertThat(actual).contains(review1);
    }

}