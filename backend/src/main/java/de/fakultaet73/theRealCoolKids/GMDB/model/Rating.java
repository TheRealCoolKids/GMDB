package de.fakultaet73.theRealCoolKids.GMDB.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.validator.constraints.Range;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Rating
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Range(min = 0, max = 5)
    private int score;

    @OneToOne
    private User user;

    public Rating(int score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {

        if (!(o instanceof Rating))
            return false;

        Rating other = (Rating) o;

        return id != null && id.equals(other.getId());
    }
}