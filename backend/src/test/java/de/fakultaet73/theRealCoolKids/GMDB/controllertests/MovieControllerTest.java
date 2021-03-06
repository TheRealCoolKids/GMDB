package de.fakultaet73.theRealCoolKids.GMDB.controllertests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@WebMvcTest
@AutoConfigureMockMvc
class MovieControllerTest {

    private Movie movie1, movie2, movie3;
    private Review review1, review2, review3;
    private Rating rating1, rating2, rating3;

    @MockBean
    private MovieRepository movieRepository;
    @MockBean
    private RatingRepository ratingRepository;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    private ReviewRepository reviewRepository;

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void init() {
        movie1 = new Movie("Test1", 2001, Genre.ACTION, 1);
        movie2 = new Movie("Test2", 2002, Genre.ACTION, 2);
        movie3 = new Movie("Test3", 2003, Genre.ACTION, 3);

        review1 = new Review("Review1", LocalDate.now(), "text1");
        review2 = new Review("Review2", LocalDate.now(), "text2");
        review3 = new Review("Review3", LocalDate.now(), "text3");

        rating1 = new Rating(1);
        rating2 = new Rating(2);
        rating3 = new Rating(3);

    }

    // 1. As a visitor of GMDB, I want to be able to see information/details about
    // each video including list of reviews for the movie so I can learn more about
    // it
    @Test
    void shouldReturnAListOfAllMovies() throws Exception {

        List<Movie> expected = Arrays.asList(movie1, movie2);
        Mockito.when(movieRepository.findAll()).thenReturn(expected);

        String json = this.mvc.perform(get("/movies").characterEncoding("UTF-8")).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2))).andExpect(jsonPath("$[0].title", is("Test1")))
                .andExpect(jsonPath("$[1].title", is("Test2"))).andReturn().getResponse().getContentAsString();
        List<Movie> actual = objectMapper.readValue(json, new TypeReference<List<Movie>>() {
        });
        // assertThat(actual.get(0)).isEqualTo(movie1);
        // assertThat(actual.get(1)).isEqualTo(movie2);
    }
    // 1. As an admin, I want to be able to add movies to the database so that it
    // can stay up-to-date

    @Test
    void returnedMoviesShouldHaveRatings() throws Exception {
        movie1.getRatings().add(rating1);
        movie2.getRatings().add(rating3);
        List<Movie> expected = Arrays.asList(movie1, movie2);
        Mockito.when(movieRepository.findAll()).thenReturn(expected);
        this.mvc.perform(get("/movies").characterEncoding("UTF-8")).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].ratings", hasSize(1))).andExpect(jsonPath("$[1].ratings", hasSize(1)))
                .andExpect(jsonPath("$[0].ratings[0].score", is(1)))
                .andExpect(jsonPath("$[1].ratings[0].score", is(3)));
    }

    @Test
    void returnedMoviesShouldHaveReviews() throws Exception {
        movie1.getReviews().add(review1);
        movie2.getReviews().add(review2);

        List<Movie> expected = Arrays.asList(movie1, movie2);
        Mockito.when(movieRepository.findAll()).thenReturn(expected);
        this.mvc.perform(get("/movies").characterEncoding("UTF-8")).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].reviews", hasSize(1))).andExpect(jsonPath("$[1].reviews", hasSize(1)))
                .andExpect(jsonPath("$[0].reviews[0].title", is("Review1")))
                .andExpect(jsonPath("$[1].reviews[0].title", is("Review2")));
    }

    @Test
    void shouldReturnAMovieWhenAMovieIsSavedAndStatusCreated() throws Exception {

        movie1.setId(11L);

        Mockito.when(movieRepository.save(movie1)).thenReturn(movie1);

        String payload = this.objectMapper.writeValueAsString(movie1);

        this.mvc.perform(post("/movies").characterEncoding("UTF-8").contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON).content(payload)).andExpect(status().isCreated())
                .andExpect(jsonPath("$.title", is(movie1.getTitle())));

        // Movie actual = this.objectMapper.readValue(json, Movie.class);
        // assertThat(actual).isEqualTo(movie1);
    }

    // 1. As an admin, I want to be able to delete a movie & its data from the
    // database so that it stays up to date

    @Test
    void shouldReturnStatusNoContentIfAMovieIsDeleted() throws Exception {

        Mockito.when(this.movieRepository.findById(11L)).thenReturn(Optional.of(new Movie()));
        this.mvc.perform(MockMvcRequestBuilders.delete("/movies/{id}", "11").contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().isNoContent());
    }

    @Test
    void shouldReturnStatusNotFoundIfAnAbsentMovieShouldBeDeleted() throws Exception {

        Mockito.when(this.movieRepository.findById(11L)).thenReturn(Optional.empty());
        this.mvc.perform(MockMvcRequestBuilders.delete("/movies/{id}", "11").contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().isBadRequest());
    }

    // 1. As a reviewer, I want to be able to add/write a review for a movie I’ve
    // seen so that other users will know what I think about this movie

    @Test
    void shouldReturnStatusCreatedIfReviewWasAddedToMovie() throws Exception {

        movie1.setId(11L);

        Mockito.when(this.movieRepository.findById(11L)).thenReturn(Optional.of(movie1));
        Mockito.when(this.movieRepository.save(movie1)).thenReturn(movie1);

        String payload = this.objectMapper.writeValueAsString(this.review1);

        this.mvc.perform(post("/movies/11/reviews").characterEncoding("UTF-8").content(payload)
                .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.reviews[0].title", is(review1.getTitle())))
                .andExpect(jsonPath("$.reviews", hasSize(1)));

        // assertThat(movie1.getReviews()).hasSize(1);
        // assertThat(movie1.getReviews().iterator().next()).isEqualTo(review1);
    }

    // 1. As a reviewer, I want to be able to rate movies (out of 5 stars) so that
    // other users will know what I rate this movie out of 5

    @Test
    void shouldReturnStatusCreatedIfRatingWasAddedToMovie() throws Exception {

        movie1.setId(11L);

        Mockito.when(this.movieRepository.findById(11L)).thenReturn(Optional.of(movie1));
        Mockito.when(this.movieRepository.save(movie1)).thenReturn(movie1);

        String payload = this.objectMapper.writeValueAsString(this.rating1);

        this.mvc.perform(post("/movies/11/ratings").characterEncoding("UTF-8").content(payload)
                .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.ratings[0].score", is(1)))
                .andExpect(jsonPath("$.ratings", hasSize(1)));
    }

    // 1. As an admin, I want to be able to update information/data about a specific
    // movie in the database to keep it up to date

    @Test
    void shouldUpdateDataAboutAMovie() throws Exception {

        movie1.setId(11L);
        review1.setId(33L);

        movie1.setTitle("Chris is cool!");

        Mockito.when(this.movieRepository.findById(11L)).thenReturn(Optional.of(movie1));
        Mockito.when(this.movieRepository.save(movie1)).thenReturn(movie1);

        String payload = this.objectMapper.writeValueAsString(movie1);

        this.mvc.perform(put("/movies").characterEncoding("UTF-8").content(payload)
                .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is("Chris is cool!")));
    }
}