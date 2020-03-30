package de.fakultaet73.therealcoolkids.gmdb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Range;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Rating
 */
@Entity
@Data
@NoArgsConstructor
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Range(min = 0, max = 5)
    private int score;

    @NotNull
    private User user;
}