package de.fakultaet73.theRealCoolKids.GMDB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;

/**
 * RatingRepository
 */
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
}