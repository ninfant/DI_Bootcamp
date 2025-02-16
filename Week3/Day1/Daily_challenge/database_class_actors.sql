-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50)NOT NULL,
-- last_name VARCHAR(200)NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL)

-- SELECT * FROM actors
-- SELECT first_name, age FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2)
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Roni','Lan','08/06/1959', 3)
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Lady','Lopez','10/02/1959', 1)

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES 
--     ('Leonardo', 'DiCaprio', '08/06/1959', 4),
--     ('Penélope', 'Cruz', '08/06/1959', 4);

-- SELECT * FROM actors

-- SELECT first_name, number_oscars
-- 	FROM actors 
-- 	WHERE number_oscars >=3
-- SELECT first_name, number_oscars FROM actors WHERE first_name !='Matt' AND number_oscars < 3 
-- SELECT * FROM actors WHERE (age > 50 OR number_oscars < 2);

-- SELECT * 
-- 	FROM actors 
-- 	WHERE last_name 
-- 	ILIKE 'LA%'

-- SELECT * 
-- FROM actors 
-- WHERE last_name 
-- ILIKE '%ey'

-- SELECT first_name, number_oscars 
-- FROM actors
-- WHERE first_name = 'George' OR first_name = 'Matt' 
-- ORDER BY number_oscars;

-- SELECT * FROM actors

-- UPDATE actors
-- SET first_name = 'Roni',
--     last_name = 'Lan'
-- WHERE first_name = 'Lady' AND last_name= 'Lopez';

-- DELETE FROM actors WHERE first_name = 'Matt';
-- DELETE FROM actors WHERE first_name = 'George'
-- RETURNING first_name


-- ALTER TABLE actors ADD COLUMN country VARCHAR(100)

-- UPDATE actors
-- SET country = 'USA'
-- WHERE country IS NULL;

