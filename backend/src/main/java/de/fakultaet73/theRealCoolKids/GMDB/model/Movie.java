package de.fakultaet73.theRealCoolKids.GMDB.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

/**
 * Movie
 */
@Entity
@NoArgsConstructor
@Data
@RequiredArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @NonNull
    private String title;

    @NonNull
    private int yearReleased;

    @NotNull
    @NonNull
    private Genre genre;

    @NonNull
    private int runtime;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Review> reviews = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Rating> ratings = new HashSet<>();
}
