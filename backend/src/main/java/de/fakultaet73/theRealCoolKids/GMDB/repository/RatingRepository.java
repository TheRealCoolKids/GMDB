package de.fakultaet73.theRealCoolKids.GMDB.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;

/**
 * RatingRepository
 */
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

    
    List<Rating> findByUser(User user);
}