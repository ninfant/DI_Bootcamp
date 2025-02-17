-- Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT first_name, last_name
-- FROM customer
-- ORDER BY first_name DESC
-- LIMIT 2;

-- Use SQL to delete all purchases made by Scott.
-- DELETE FROM payment WHERE customer_id IN (SELECT customer_id FROM customer WHERE first_name = 'Scott');

-- SELECT customer_id FROM customer WHERE first_name = 'Scott'

-- SELECT payment.payment_id, payment.amount, payment.payment_date, 
--        NULLIF(customer.first_name, 'Scott') AS first_name,
--        NULLIF(customer.last_name, 'Scott') AS last_name
-- FROM payment
-- LEFT JOIN customer ON payment.customer_id = customer.customer_id;
