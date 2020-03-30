package de.fakultaet73.theRealCoolKids.GMDB.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Movie
 */
@Entity
@Data
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String title;

    @NotNull
    private LocalDate yearReleased;

    @NotNull
    private Genre genre;

    private int runtime;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Review> reviews;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Rating> ratings;
}
