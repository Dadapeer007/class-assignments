/*Q2. Movies Schema Design Unsolved We’re going to design a movies database. Each movie has a title and year, one (and only one) director, and some number of actors. Actors can star in multiple movies. Directors can direct multiple movies. Some movies have the same title such as Ocean’s Eleven (the 2001 version directed by Steven Sodenbergh had George Clooney, Brad Pitt, Matt Damon, Julia Roberts, and many others, but the 1960 version was directed by Lewis Milestone and starred Frank Sinatra, Dean Martin and Sammy Davis Jr).

The schema should be normalized enough to avoid duplicating strings too much, and also to be able to efficiently answer questions like these two:

Who acted in Fight Club (1999)?
What are the 10 most recent movies that George Clooney starred in?
Mention all your tables (with its attributes), relationships between tables using Draw.io editor

Example:

Tables:

1. Table A

int attirbute_a1
string attirbute_a2

2. Table B

int attirbute_b1
string attirbute_b2

Relationships:

Table A belongs to Table B etc.*/


-- Create the Movie table

CREATE TABLE Movie (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    director_id INT NOT NULL,
    FOREIGN KEY (director_id) REFERENCES Director(director_id)
);

-- Create the MovieActor table for the many-to-many relationship

CREATE TABLE MovieActor (
    movie_id INT,
    actor_id INT,
    PRIMARY KEY (movie_id, actor_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
    FOREIGN KEY (actor_id) REFERENCES Actor(actor_id)
);
