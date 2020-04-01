package de.fakultaet73.theRealCoolKids.GMDB.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;

/**
 * ReviewRepository
 */
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByUser(User user);
    
}