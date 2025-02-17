-- -- How to change the date 
-- SELECT TO_CHAR(age, 'DD-MM-YYYY') AS formatted_date
-- FROM your_table


-- CREATE TABLE movies (
-- movie_id SERIAL,
-- movie_title VARCHAR(100) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- )

-- THE TABLE WITH THE FK IS THE CHILD INSERTING DATA ON THE CHILD TABLE

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
-- (SELECT actor_id FROM actors WHERE first_name = 'Matt' AND last_name= 'Damon')),
-- ('Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'))

-- SELECT * FROM movies

-- CREATE TABLE producers (
-- producers_movie_id SERIAL,
-- first_name VARCHAR(100) NOT NULL,
-- last_name VARCHAR(100) NOT NULL,
-- my_movie_id INTEGER,
-- PRIMARY KEY (producers_movie_id),
-- FOREIGN KEY (my_movie_id) REFERENCES movies (movie_id)
-- )

-- SELECT * FROM producers

-- INSERT INTO producers(first_name, last_name, my_movie_id)
-- VALUES ('Lorenzo', 'Vazquez', 
-- (SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting')),
-- ('Maria', 'Martz', 
-- (SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven')),
-- ('Lala', 'Pourt', 
-- (SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven')),
-- ('Lola', 'Lou', 
-- (SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven'))

-- Esto es un ejemplo de JOIN
-- SELECT producers.first_name, producers.last_name, movies.movie_title
-- FROM movies
-- INNER JOIN producers
-- ON producers.producers_movie_id = movies.movie_id

	