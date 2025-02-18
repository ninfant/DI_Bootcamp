-- ON DELETE AND ON UPDATE OPRTIONS:

-- CREATING THE PARENT TABLE:

-- CREATE TABLE colors (
-- color_id SERIAL PRIMARY KEY,
-- color VARCHAR(50))

-- INSERT INTO colors (color)
-- VALUES ('red')

-- SELECT * FROM colors

-- CREATING THE CHILD TABLE AND DEFINING THE ON DELETE

-- CASCADE
-- CREATE TABLE cars_cascade(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- INSERT INTO cars_cascade (car_name, car_color_id) VALUES ('Toyota', 3), ('Ford', 2), ('Honda', 3)
-- SELECT * FROM cars_cascade

-- DELETE FROM colors WHERE color = 'red'
-- UPDATE colors 
-- SET color_id = 6
-- WHERE color_id = 3

-- IT DELETES THE ROW ON THE CHILD WHERE THERE IS A RELATION TO THE PARENT


-- RESTRICT: DOESN'T ALLOW YOU TO DELETE A RECORD THAT HAS RELATION WITH OTHER TABLES

-- CREATE TABLE cars_restrict(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE RESTRICT ON UPDATE RESTRICT 
-- )

-- SELECT * FROM colors

-- INSERT INTO cars_restrict (car_name, car_color_id) VALUES ('Toyota', 6), ('Ford', 2), ('Honda', 6)
-- SELECT * FROM cars_restrict

-- DELETE FROM colors WHERE color = 'blue'
-- IT GIVES AN ERROR: DOESN'T ALLOW US TO DELETE THE ROW ON THE PARENT BECAUSE THERE ARE RELATED ROWS ON THE CHILD

UPDATE colors 
SET color_id = 2
WHERE color_id = 6





-- SELECT * FROM colors

-- CREATE TABLE cars_set_default(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER DEFAULT 2,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE SET DEFAULT
-- )

-- INSERT INTO cars_set_default (car_name, car_color_id) VALUES ('Toyota', 4), ('Ford', 2), ('Honda', 3), ('Mazda', 4)

-- SELECT * FROM cars_set_default

-- DELETE FROM colors WHERE color_id = 4



