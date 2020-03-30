package de.fakultaet73.therealcoolkids.gmdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.fakultaet73.therealcoolkids.gmdb.model.Movie;

/**
 * MovieRepository
 */
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}