package de.fakultaet73.theRealCoolKids.GMDB.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Review
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @NotNull
    private LocalDate creationDate;

    @NotNull
    private String text;

    @OneToOne
    private User user;

    public Review(String title, LocalDate creationDate, String text) {
        this.title = title;
        this.creationDate = creationDate;
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {

        if (!(o instanceof Review))
            return false;

        Review other = (Review) o;

        return id != null && id.equals(other.getId());
    }

}
