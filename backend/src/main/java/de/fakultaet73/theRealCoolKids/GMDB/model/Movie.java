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

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 * Movie
 */
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String title;

    private int yearReleased;

    @NotNull
    private Genre genre;

    private int runtime;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Review> reviews = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<Rating> ratings = new HashSet<>();

    public Movie(String title, int yearReleased, Genre genre, int runtime) {
        this.title = title;
        this.yearReleased = yearReleased;
        this.genre = genre;
        this.runtime = runtime;
    }
}
