package de.fakultaet73.theRealCoolKids.GMDB.controllertests;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;

@WebMvcTest
@AutoConfigureMockMvc
class MovieControllerTest {

    Movie movie1;
    Movie movie2;
    Movie movie3;

    @MockBean
    MovieRepository movieRepository;

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

    @Test
    void shouldReturnAListOfAllMovies() throws Exception {
        List<Movie> expected = Arrays.asList(movie1, movie2);
        Mockito.when(movieRepository.findAll()).thenReturn(expected);
        String json = this.mvc.perform(get("/movies")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].title", is("Test1"))).andExpect(jsonPath("$[1].title", is("Test2")))
                .andReturn().getResponse().getContentAsString();
        List<Movie> actual = objectMapper.readValue(json, new TypeReference<List<Movie>>() {
        });
        assertThat(actual).isEqualTo(expected);
    }

    void shouldReturnAMoviewhenaMovieIsSavend() {

    }

}