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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Rating> ratings = new HashSet<>();

    public Movie(String title, int yearReleased, Genre genre, int runtime) {
        this.title = title;
        this.yearReleased = yearReleased;
        this.genre = genre;
        this.runtime = runtime;
    }

    public boolean addReview(Review review) {
        return this.reviews.add(review);
    }

    public boolean deleteReview(Review review) {
        return this.reviews.remove(review);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((genre == null) ? 0 : genre.hashCode());
        result = prime * result + (int) (id ^ (id >>> 32));
        result = prime * result + ((ratings == null) ? 0 : ratings.hashCode());
        result = prime * result + ((reviews == null) ? 0 : reviews.hashCode());
        result = prime * result + runtime;
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + yearReleased;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Movie other = (Movie) obj;
        if (genre != other.genre)
            return false;
        if (id != other.id)
            return false;
        if (ratings == null) {
            if (other.ratings != null)
                return false;
        } else if (!ratings.equals(other.ratings))
            return false;
        if (reviews == null) {
            if (other.reviews != null)
                return false;
        } else if (!reviews.equals(other.reviews))
            return false;
        if (runtime != other.runtime)
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (yearReleased != other.yearReleased)
            return false;
        return true;
    }
}
