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
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@WebMvcTest
@AutoConfigureMockMvc

public class RatingControllerTest {
    Movie movie1, movie2, movie3;
    Review review1, review2, review3;
    Rating rating1, rating2, rating3;
    User user;

    @MockBean
    MovieRepository movieRepository;
    @MockBean
    RatingRepository ratingRepository;
    @MockBean
    UserRepository userRepository;
    @MockBean
    ReviewRepository reviewRepository;

    @Autowired
    private MockMvc mvc;

    @Autowired
    ObjectMapper objectMapper;

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
        user = new User("Peter", "12345");

    }

    @Test
    void shouldUpdateRating() throws Exception {
        // Bamm
        rating1.setId(3L);
        movie1.setId(11L);
        movie1.addRating(rating1);

        Mockito.when(this.ratingRepository.findById(3L)).thenReturn(Optional.of(rating1));
        Mockito.when(this.ratingRepository.save(rating1)).thenReturn(rating1);

        rating1.setScore(4);
        String payload = this.objectMapper.writeValueAsString(rating1);

        mvc.perform(put("/ratings").characterEncoding("UTF-8").content(payload).contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.score", is(4)));

    }
}