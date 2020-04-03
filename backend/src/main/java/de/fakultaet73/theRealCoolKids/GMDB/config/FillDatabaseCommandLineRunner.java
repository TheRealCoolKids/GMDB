package de.fakultaet73.theRealCoolKids.GMDB.config;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import de.fakultaet73.theRealCoolKids.GMDB.model.Genre;
import de.fakultaet73.theRealCoolKids.GMDB.model.Movie;
import de.fakultaet73.theRealCoolKids.GMDB.model.Rating;
import de.fakultaet73.theRealCoolKids.GMDB.model.Review;
import de.fakultaet73.theRealCoolKids.GMDB.model.User;
import de.fakultaet73.theRealCoolKids.GMDB.repository.MovieRepository;
import de.fakultaet73.theRealCoolKids.GMDB.repository.UserRepository;

@Component
public class FillDatabaseCommandLineRunner  implements CommandLineRunner{


    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        Movie movie1 = new Movie("Schöne, neue Welt 1", 1991, Genre.HORROR, 45);
        Movie movie2 = new Movie("Schöne, neue Welt 2", 1992, Genre.HORROR, 45);
        Movie movie3 = new Movie("Schöne, neue Welt 3", 1992, Genre.HORROR, 45);
        Movie movie4 = new Movie("Schöne, neue Welt 4", 1993, Genre.HORROR, 45);
        Movie movie5 = new Movie("Schöne, neue Welt - Wie alles begann", 1994, Genre.HORROR, 45);
        Movie movie6 = new Movie("Schöne, neue Welt - Jetzt erst recht", 1994, Genre.HORROR, 45);
        Movie movie7 = new Movie("Schöne, neue Welt - Eine Welt kommt niemals allein", 1994, Genre.HORROR, 45);
        Movie movie8 = new Movie("Schöne, neue Welt - Reloaded", 1994, Genre.HORROR, 45);

        User user1 = new User("Christian", "1234");
        User user2 = new User("Udo", "1234");
        User user3 = new User("Bernd", "1234");
        User user4 = new User("Frank", "1234");

        this.userRepository.save(user1);
        this.userRepository.save(user2);
        this.userRepository.save(user3);
        this.userRepository.save(user4);


        Review review1 = new Review("Riesenfilm!", LocalDate.now(), "Unfassbarer Plot mit großartigen Charakteren und überhaupt");
        Review review2 = new Review("Ganz ok!", LocalDate.now().plusDays(14), "Artur war der Hammer als Bre'tur");
        Review review3 = new Review("Großer Mist!", LocalDate.now().plusDays(14), "Tolle Filmemfehlung Christian, danke für nichts");
        Review review4 = new Review("Danke Merkel!", LocalDate.now().plusDays(14), "Christian ist in der Rolle des Diktators nicht so nett :-(");

        review1.setUser(user1);
        review2.setUser(user2);
        review3.setUser(user3);      
        review4.setUser(user4);      
        
        Rating rating =  new Rating(2);
        Rating rating1 =  new Rating(2);
        Rating rating2 =  new Rating(2);
        Rating rating3 =  new Rating(3);
        Rating rating4 =  new Rating(5);
        Rating rating5 =  new Rating(3);
        Rating rating6 =  new Rating(1);
        Rating rating7 =  new Rating(4);

        rating.setUser(user1);
        rating1.setUser(user1);
        rating2.setUser(user1);
        rating3.setUser(user1);
        rating4.setUser(user3);
        rating5.setUser(user4);
        rating6.setUser(user1);
        rating7.setUser(user1);
          
        movie1.getReviews().add(review1);
        movie2.getReviews().add(review2);
        movie3.getReviews().add(review3);
        movie4.getReviews().add(review4);

        movie1.addRating(rating1);
        movie2.addRating(rating2);
        movie3.addRating(rating3);
        movie4.addRating(rating4);
        movie2.addRating(rating5);
        movie1.addRating(rating6);
        movie1.addRating(rating7);

        
        
        this.movieRepository.save(movie1);
        this.movieRepository.save(movie2);
        this.movieRepository.save(movie3);
        this.movieRepository.save(movie4);
        this.movieRepository.save(movie5);
        this.movieRepository.save(movie6);
        this.movieRepository.save(movie7);
        this.movieRepository.save(movie8);
 
        
    }
    


}
