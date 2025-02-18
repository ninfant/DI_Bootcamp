-- EXERCISE
-- 1 - Create a table called cars_set_default. 
-- It will have three columns: car_id (the primary key), car_name and car_color_id 
-- (CAR COLOR WILL BE SET DEFAULT):
--   ON DELETE SET DEFAULT 

-- - 2 - create a delete statement to delete from the colors table some color id. 
-- - 3 - select * from cars_set_default and analyse. What happened?

-- CREATE TABLE cars_set_default (
--     car_id SERIAL PRIMARY KEY,
--     car_name VARCHAR(100),
--     car_color INTEGER DEFAULT 7 REFERENCES colors (color_id) ON DELETE SET DEFAULT ON UPDATE SET DEFAULT
-- );

--OBS.: THE DEFAULT VALUE MUST EXIST IN THE TABLE 

-- INSERT INTO cars_set_default (car_name, car_color) VALUES ('Toyota', 7), ('Ford', 8), ('Honda', 10), ('Mazda', 10);

-- select * from cars_set_default
-- DELETE FROM colors WHERE color_id = 10;

-- select * from cars_set_default
