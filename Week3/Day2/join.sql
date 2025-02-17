-- JOINS IN SQL 

-- INNER JOIN: Will  

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id


-- ___This way I can create a table with a Inner Joins results inside, (USE ALIAS)___

-- CREATE TABLE movie_actors AS
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id


-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Harry Potter and Philosopher`s Stone', 
--     'Harry Potter and the Philosopher`s Stone is an enthralling start to Harry`s journey toward coming to terms with his past and facing his future.',
-- NULL)

-- SELECT * from movies
-- SELECT * from actors
-- SELECT * FROM producers

-- ___Using ALIAS in INNER JOIN___
-- SELECT pd.first_name, pd.last_name, mv.movie_title
-- FROM producers AS pd 
-- INNER JOIN movies AS mv
-- ON pd.producers_movie_id = mv.movie_id

-- -----LEFT JOIN: ------
-- ALL from the left table --
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- LEFT JOIN movies
-- ON actors.actor_id = movies.actor_playing_id


-- -----RIGHT JOIN: ------
-- ALL from the right table --
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- RIGHT JOIN movies
-- ON actors.actor_id = movies.actor_playing_id


-- -----FULL JOIN: ------
-- ALL the  table --
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- FULL JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- EXERCISE
-- Create another table, called countries, with two fields : country_id and coutry_name. It has no foreign key. It's a table to test the PostgreSQL Joins.
-- Use INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN to join the table countries with the table actors, depending on the comparaison of their primary key
-- Look at the results, and analyse them to understand the difference between the types of PostgreSQL Joins
-- CREATE TABLE countries (
--     country_id SERIAL PRIMARY KEY,
--     country_name VARCHAR(100) NOT NULL
-- )

-- INSERT INTO countries (country_name)
-- VALUES('USA'),('Israel'), ('Brazil'), ('Canada')

-- SELECT * FROM countries 
-- -- INNER JOIN
-- SELECT countries.country_name, actors.first_name
-- FROM countries
-- LEFT JOIN actors
-- ON actors.actor_id=countries.country_id

-- SELECT countries.country_name, actors.first_name
-- FROM countries
-- RIGHT JOIN actors
-- ON actors.actor_id=countries.country_id

-- SELECT countries.country_name, actors.first_name
-- FROM countries
-- FULL JOIN actors
-- ON actors.actor_id=countries.country_id