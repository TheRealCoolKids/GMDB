package de.fakultaet73.therealcoolkids.gmdb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import de.fakultaet73.therealcoolkids.gmdb.repository.MovieRepository;

@DataJpaTest
class MovieRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private MovieRepository movieRepository;;

}