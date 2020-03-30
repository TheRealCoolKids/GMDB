# GMDB (Galvanize Movie Database) 

**Movie** = { id | title | yearReleased | genre | runtime | rating | *reviews* | *ratings* }

**Review** = { id |tTitle | creationDate | text | *user* }

**Rating** = { id | score | *user* }

**User** = { id | username | password | roles | *watchList* | *watched* }


## Http Requests

### Visitor

* **/movies - GET** 
List of all movies

* **/movies/{movieid} - GET**
Details/Information about each movie and list of reviews

* **/reviewer/{username} - GET**
Reviewer details and list of their reviews and ratings

### Reviewer

* **/reviews - POST**
Write a review

* **/reviews - PUT**
Update a review

* **/reviews/{id} - DELETE**
Delete review

* **/ratings - POST**
Write a review

* **/ratings - PUT**
Update a review

* **/ratings/{id} - DELETE**
Delete review

* **/user/{username}/watchlist/ - POST**
Add movie to user movie list

* **/user/{username}/watchlist/{id} - DELETE**
Add movie to user movie list

* **/user/{username}/watched/ - POST**
Add movie to user watched list

* **/user/{username}/watched/{id} - DELETE**
Add movie to user watched list

### ADMIN

* **/movies - POST**
Add movie

* **/movies - PUT**
Update movie

* **/movies/{id} - DELETE**
Delete movie

* **/reviews - PUT**
Update a review

* **/reviews/{id} - DELETE**
Delete a review

* **/signup - POST**
Register for an account

* **/token/authenticate - POST**
Generate Json Web Token
	

