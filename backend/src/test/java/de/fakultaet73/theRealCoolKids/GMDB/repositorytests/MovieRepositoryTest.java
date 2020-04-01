package de.fakultaet73.theRealCoolKids.GMDB;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;

@DataJpaTest
class MovieRepositoryTest {

    Movie movie;
    Review review1, review2, review3;
    Rating rating1, rating2, rating3;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @BeforeEach
    void init() {
        movie = new Movie("Movie title", 1999, Genre.ACTION, 666);
        review2 = new Review("title 2", LocalDate.now(), "text 1");
        review1 = new Review("title 1", LocalDate.now(), "text 1");
        review3 = new Review("title 3", LocalDate.now(), "text 1");
        rating1 = new Rating(0);
        rating2 = new Rating(5);
        rating3 = new Rating(4);

    }

    @Test
    void canSaveAMovie() {
        Movie expected = this.movieRepository.save(this.movie);
        Optional<Movie> actual = this.movieRepository.findById(movie.getId());
        assertThat(actual.isPresent()).isTrue();
        assertThat(actual.get().getId()).isEqualTo(expected.getId());
    }

    @Test
    void canLinkMovieToReviewAndRatings() {

        Collections.addAll(movie.getReviews(), review1, review2, review3);
        Collections.addAll(movie.getRatings(), rating1, rating2, rating3);

        Movie expected = this.movieRepository.save(this.movie);
        Movie actual = this.movieRepository.findById(this.movie.getId()).get();

        assertThat(actual.getReviews()).isNotEmpty();
        assertThat(actual.getReviews()).hasSize(3);
        assertArrayEquals(expected.getReviews().toArray(), actual.getReviews().toArray());

        assertThat(actual.getRatings()).isNotEmpty();
        assertThat(actual.getRatings()).hasSize(3);
        assertArrayEquals(expected.getRatings().toArray(), actual.getRatings().toArray());
    }

    @Test
    void whenAMovieIsDeletedThenAllRelatedReviewsAndRatingShouldBeDeleted() {

        Collections.addAll(movie.getReviews(), review1, review2, review3);
        Collections.addAll(movie.getRatings(), rating1, rating2, rating3);

        Movie savedMovie = this.movieRepository.save(this.movie);
        this.movieRepository.delete(savedMovie);

        assertThat(this.ratingRepository.findAll()).isEmpty();
        assertThat(this.reviewRepository.findAll()).isEmpty();
    }

    @Test
    void shouldSaveAChangedMovie() {

        Movie movie = this.movieRepository.save(this.movie);

        assertThat(movie.getTitle()).isEqualTo("Movie title");
        assertThat(movie.getRuntime()).isEqualTo(666);
        assertThat(movie.getYearReleased()).isEqualTo(1999);
        assertThat(movie.getGenre()).isEqualTo(Genre.ACTION);

        movie.setTitle("New Movie title");
        movie.setRuntime(999999);
        movie.setYearReleased(1984);
        movie.setGenre(Genre.HORROR);
        this.movieRepository.saveAndFlush(this.movie);
        Movie actual = this.movieRepository.findById(movie.getId()).get();
        assertThat(actual.getTitle()).isEqualTo("New Movie title");
    }

    @Test
    void shouldDeleteAReview() {

        Collections.addAll(movie.getReviews(), review1, review2, review3);

        movie = this.movieRepository.save(movie);
        movie = this.movieRepository.findById(movie.getId()).get();

        Review deletedReview = movie.getReviews().iterator().next();

        movie.getReviews().remove(deletedReview);

        Movie expected = this.movieRepository.save(movie);

        Movie actual = this.movieRepository.findById(expected.getId()).get();
        List<Review> actualReviews = this.reviewRepository.findAll();

        assertThat(actual.getReviews()).hasSize(2);
        assertThat(actual.getReviews().toArray()).doesNotContain(deletedReview);

        assertArrayEquals(actual.getReviews().toArray(), expected.getReviews().toArray());
        assertThat(actualReviews.toArray()).hasSize(2);
    }

    @Test
    void shouldDeleteARating() {

        Collections.addAll(movie.getRatings(), rating1, rating2, rating3);

        movie = this.movieRepository.save(movie);
        movie = this.movieRepository.findById(movie.getId()).get();

        Rating deletedRating = movie.getRatings().iterator().next();

        movie.getRatings().remove(deletedRating);

        Movie expected = this.movieRepository.save(movie);

        Movie actual = this.movieRepository.findById(expected.getId()).get();
        List<Rating> actualRatings = this.ratingRepository.findAll();

        assertThat(actual.getRatings()).hasSize(2);
        assertThat(actual.getRatings().toArray()).doesNotContain(deletedRating);

        assertArrayEquals(actual.getRatings().toArray(), expected.getRatings().toArray());
        assertThat(actualRatings.toArray()).hasSize(2);
    }
}
