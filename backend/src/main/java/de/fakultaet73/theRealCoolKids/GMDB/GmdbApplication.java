package de.fakultaet73.theRealCoolKids.GMDB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;

@SpringBootApplication
@ComponentScan
public class GmdbApplication {

	public static void main(String[] args) {
		SpringApplication.run(GmdbApplication.class, args);
	}

}
