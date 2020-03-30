package de.fakultaet73.theRealCoolKids.GMDB;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;

@DataJpaTest
class MovieRepositoryTests {

    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private MovieRepository movieRepository;;

}