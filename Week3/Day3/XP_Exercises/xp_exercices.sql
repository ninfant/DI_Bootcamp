-- EX1
-- Get a list of all the languages, from the language table.
-- SELECT name FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- SELECT film.title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT film.title, film.description, language.name
-- FROM language
-- LEFT JOIN film
-- ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film(
-- id_new_film SERIAL PRIMARY KEY,
-- name_new_film VARCHAR(50) NOT NULL
-- )
-- INSERT INTO new_film (name_new_film)
-- VALUES('Inception'),
-- ('The Matrix'),
-- ('Interstellar'),
-- ('The Dark Knight'),
-- ('Parasite'),
-- ('Avatar'),
-- ('Titanic')

-- SELECT * FROM new_film



-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review(
-- review_id SERIAL NOT NULL,
-- film_id INTEGER NOT NULL,
-- language_id INTEGER NOT NULL,
-- title VARCHAR(200) NOT NULL,
-- score INTEGER NOT NULL,
-- review_text TEXT,
-- last_update TIMESTAMP without time zone NOT NULL,
-- PRIMARY KEY(review_id),
-- FOREIGN KEY (film_id) REFERENCES new_film(id_new_film) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language(language_id)
-- )
-- SELECT * FROM customer_review

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES (1, 1, 'Mind-Blowing!', 10, 'Great storytelling', '2025-02-18 12:30:00'),
-- (2, 1, 'Emotional and Beautiful', 9, 'Visually stunning.', '2025-02-18 12:35:00');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- SELECT * FROM customer_review WHERE film_id = 1;

-- DELETE FROM new_film WHERE id_new_film = 1;
-- As I used ON DELETE CASCADE, when I delete a film from the new_film table
-- all related reviews in the customer_review table will be automatically deleted

-- EX2
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film 
-- SET language_id = 5
-- WHERE film_id = 8

-- -- SELECT * FROM language
-- SELECT film_id, title, language_id 
-- FROM film 
-- WHERE film_id = 8;


 -- FOREIGN KEY (address_id)
 -- Since the customer table has foreign keys, you must ensure that the referenced values exist before inserting a new customer

-- DROP TABLE customer_review


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT(*) 
-- FROM rental 
-- WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT f.film_id, f.title, f.rental_rate, r.rental_date, r.return_date
-- FROM rental r
-- INNER JOIN inventory i ON r.inventory_id = i.inventory_id
-- INNER JOIN film f ON i.film_id = f.film_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT first_name, actor_id, last_name
-- FROM actor
-- WHERE first_name='Penelope' AND last_name='Monroe'

-- SELECT film.title,film.description, film_actor.actor_id, actor.first_name, actor.last_name
-- FROM film
-- INNER JOIN film_actor ON film_actor.film_id= film.film_id
-- INNER JOIN actor ON actor.actor_id= film_actor.actor_id
-- WHERE first_name='Penelope' 
-- AND last_name='Monroe'
-- AND film.description ILIKE '%sumo wrestler%'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT length, rating, title, description
-- FROM film
-- WHERE length < 60 
-- AND rating='R'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT f.film_id, f.title, r.rental_date, r.return_date, p.amount, c.first_name
-- FROM rental r
-- INNER JOIN customer c ON r.customer_id = c.customer_id
-- INNER JOIN payment p ON r.rental_id = p.rental_id
-- INNER JOIN inventory i ON r.inventory_id = i.inventory_id
-- INNER JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND p.amount > 4.00
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

-- SELECT f.film_id, f.title, f.description, f.replacement_cost, r.rental_date
-- FROM rental r
-- INNER JOIN customer c ON r.customer_id = c.customer_id
-- INNER JOIN inventory i ON r.inventory_id = i.inventory_id
-- INNER JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
-- ORDER BY f.replacement_cost DESC
-- LIMIT 1;


