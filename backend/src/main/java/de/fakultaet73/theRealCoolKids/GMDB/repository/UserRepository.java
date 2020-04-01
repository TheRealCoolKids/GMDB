package de.fakultaet73.theRealCoolKids.GMDB.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import de.fakultaet73.theRealCoolKids.GMDB.model.User;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}