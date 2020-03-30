package de.fakultaet73.therealcoolkids.gmdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import de.fakultaet73.therealcoolkids.gmdb.model.User;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {

}