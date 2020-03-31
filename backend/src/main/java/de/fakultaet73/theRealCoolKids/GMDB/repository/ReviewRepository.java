package de.fakultaet73.theRealCoolKids.GMDB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;

/**
 * ReviewRepository
 */
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}