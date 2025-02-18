-- ----ON DELETE CASCADE-----

-- CREATE TABLE colors(
-- color_id SERIAL PRIMARY KEY,
-- color VARCHAR(50)
-- )

-- INSERT INTO colors (color)
-- VALUES ('red'),('blue'), ('yellow')

-- CREATE TABLE cars_cascade(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- INSERT INTO cars_cascade (car_name, car_color_id) VALUES ('Toyota', 2), ('Ford', 2), ('Honda', 2)

-- SELECT * FROM cars_cascade
-- DELETE FROM colors WHERE color ='red'


----ON DELETE RESTRICT------

-- CREATE TABLE cars_restrict(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE RESTRICT
-- )

-- INSERT INTO cars_restrict (car_name, car_color_id) VALUES ('Toyota', 2), ('Ford', 2), ('Honda', 3)
-- SELECT * FROM cars_restrict
-- DELETE FROM colors WHERE color ='blue' no me deja eliminar por el DELETE RESTRICT co que se creo la tabla




------- DELETE SET DEFAULT------

----we have the table: colors---

-- CREATE TABLE cars_set_default(
-- car_id SERIAL,
-- car_name VARCHAR(50),
-- car_color_id INTEGER DEFAULT 1,
-- PRIMARY KEY (car_id),	
-- FOREIGN KEY (car_color_id) REFERENCES colors (color_id) ON DELETE SET DEFAULT
-- )
-- Here, DEFAULT 1 is set, meaning if a referenced color is deleted, the car_color_id will be set to 1 instead of being removed.



-- INSERT INTO cars_set_default (car_name, car_color_id) VALUES ('Toyota', 2), ('Ford', 2), ('Honda', 3),('Mazda', 2)


-- DELETE FROM colors WHERE color_id = 3

-- SELECT * FROM cars_set_default
SELECT * FROM colors 


-- UPDATE colors
-- SET color_id = 6
-- WHERE color_id= 2


