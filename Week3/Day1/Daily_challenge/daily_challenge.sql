-- SELECT * FROM actors


-- SELECT COUNT(*) FROM actors



 -- Try to add a new actor with some blank fields:
 -- if we dont add a field that is defined as NOT NULL will get errors:
-- ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
-- INSERT INTO actors (first_name, age, number_oscars, country)
-- VALUES ('Meryl', '08/06/1945', 5, 'USA') 

-- in the example below I just added last_name as empty and is OK, cause i keep all the fields
-- INSERT INTO actors (first_name, last_name, age, number_oscars, country)
-- VALUES ('Meryl', '', '08/06/1945', 5, 'USA') 


