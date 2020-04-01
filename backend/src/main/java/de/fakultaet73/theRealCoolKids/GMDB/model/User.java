package de.fakultaet73.theRealCoolKids.GMDB.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String username;

    @NotNull
    @JsonIgnore
    private String password;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<Role> role = new HashSet<>();

    @OneToMany
    private Set<Movie> watchList = new HashSet<>();

    @OneToMany
    private Set<Movie> watchedList = new HashSet<>();

    public User(String userName, String password) {
        this.username = userName;
        this.password = password;
    }
}