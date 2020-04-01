package de.fakultaet73.theRealCoolKids.GMDB.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.validator.constraints.Range;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;



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
    private long id;
    @Range(min = 0, max = 5)
    private int score;

    @OneToOne
    private User user;

    public Rating(int score) {
        this.score = score;
    }
}