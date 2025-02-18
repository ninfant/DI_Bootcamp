-- -- ex1
-- -- All items, ordered by price (lowest to highest).
--  SELECT * FROM items
--  ORDER BY items_price ASC
 
-- -- Items with a price above 80 (80 included), ordered by price (highest to lowest).
--  SELECT * FROM items
--  WHERE items_price >=80
--  ORDER BY items_price DESC

-- -- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
--  SELECT last_name FROM customers
--  ORDER BY last_name DESC

-- -- All last names (no other columns!), in reverse alphabetical order (Z-A)
--   SELECT last_name FROM customers
--  ORDER BY last_name DESC



-- ex2

-- SELECT * FROM customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- SELECT CONCAT(first_name, ' ', last_name) AS full_name
-- FROM customer

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
-- SELECT DISTINCT create_date 
-- FROM customer

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name
-- SELECT * FROM customer
-- ORDER BY first_name DESC

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- SELECT film_id, title, description, release_year, rental_rate 
-- FROM film
-- ORDER BY rental_rate ASC

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
-- SELECT district FROM address

-- SELECT address.address, address.phone
-- FROM customer
-- INNER JOIN address
-- ON customer.address_id = address.address_id
-- WHERE address.district = 'Texas';

-- Write a query to retrieve all films details where the film id is either 15 or 150.
-- SELECT * FROM film
-- WHERE film_id = 15 AND film_id =150

-- SELECT * FROM film
-- WHERE film_id = 15 OR film_id = 150

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
-- SELECT title FROM film

-- SELECT film_id, title, description, length, rental_rate 
-- FROM film
-- WHERE title='The Notebook'

 -- all the movies starting with the two first letters of your favorite movie.
-- SELECT film_id, title, description, length, rental_rate 
-- FROM film
-- WHERE title ILIKE 'Th%'


-- Write a query which will find the 10 cheapest movies
-- SELECT film_id, title, description, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
-- SELECT film_id, title, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10
-- FETCH NEXT 10 ROWS ONLY

-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment
-- ON payment.customer_id=customer.customer_id
-- ORDER BY payment.payment_id ASC, customer.customer_id ASC

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- SELECT film.film_id, film.title, inventory.film_id
-- FROM film
-- LEFT JOIN inventory ON film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL;

-- Write a query to find which city is in which country.
-- SELECT city.city, country.country
-- FROM city
-- FULL JOIN country ON country.country_id = city.country_id


-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
-- SELECT customer.customer_id, customer.first_name, customer.last_name, 
-- payment.amount, payment.payment_date, payment.staff_id
-- FROM customer
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- ORDER BY payment.staff_id ASC;



