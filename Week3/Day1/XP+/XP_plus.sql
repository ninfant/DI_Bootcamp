-- CREATE TABLE students(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(100) NOT NULL,
-- last_name VARCHAR(100) NOT NULL,
-- birth_date DATE NOT NULL
-- )
-- DROP TABLE students;

-- SELECT * FROM students

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Marc', 'Benichou','02/11/1998' )

-- DELETE FROM students WHERE last_name = 'Marc';

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Yoan', 'Cohen', '2010-12-03'),
-- ('Lea', 'Benichou', '1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-03');


-- SELECT first_name, last_name
-- FROM students
-- WHERE id=3

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name ='Benichou' AND
-- first_name ='Marc'

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name ='Benichou' OR 
-- first_name ='Marc'

-- -- Fetch the students whose first_names contain the letter a
-- SELECT first_name, last_name
-- FROM students WHERE first_name
-- LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
-- SELECT first_name, last_name
-- FROM students WHERE first_name
-- ILIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
-- SELECT first_name, last_name
-- FROM students WHERE first_name
-- ILIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT first_name, last_name
-- FROM students
-- WHERE first_name ILIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT first_name, last_name
-- FROM students
-- WHERE id=2 AND id=3

-- SELECT * FROM students

-- SELECT first_name, last_name
-- FROM students
-- WHERE birth_date >= '1/01/2000'
