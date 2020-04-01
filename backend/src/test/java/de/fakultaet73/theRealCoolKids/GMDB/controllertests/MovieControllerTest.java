package de.fakultaet73.theRealCoolKids.GMDB.controllertests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

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

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.RatingRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.ReviewRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@WebMvcTest
@AutoConfigureMockMvc
class MovieControllerTest {

    Movie movie1;
    Movie movie2;
    Movie movie3;

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
        assertThat(actual.get(0)).isEqualTo(movie1);
        assertThat(actual.get(1)).isEqualTo(movie2);
    }
    // 1. As an admin, I want to be able to add movies to the database so that it
    // can stay up-to-date

    @Test
    void shouldReturnAMovieWhenAMovieIsSavedAndStatusCreated() throws Exception {
        Mockito.when(movieRepository.save(movie1)).thenReturn(movie1);
        String payload = this.objectMapper.writeValueAsString(movie1);

        String json = this.mvc.perform(post("/movies")
        .contentType(MediaType.APPLICATION_JSON)
        .accept(MediaType.APPLICATION_JSON)
        .content(payload))
        .andExpect(status().isCreated())
        .andReturn().getResponse().getContentAsString();
        Movie actual = this.objectMapper.readValue(json, Movie.class);
        assertThat(actual).isEqualTo(movie1);
    }
}
    
    // 1. As an admin, I want to be able to delete a movie & its data from the
    // database so that it stays up to date

// 1. As a reviewer, I want to be able to add/write a review for a movie I’ve
// seen so that other users will know what I think about this movie

// 1. As a reviewer, I want to be able to rate movies (out of 5 stars) so that
// other users will know what I rate this movie out of 5


// 1. As an admin, I want to be able to update information/data about a specific
// movie in the database to keep it up to date

// this.mockMvc.perform(post("/actions.htm?reqType=delete")
// .param("aPk", "2")).andReturn().getResponse().getStatus());
