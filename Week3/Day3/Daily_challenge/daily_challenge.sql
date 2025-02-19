-- CREATE TABLE Customer(
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE Customer_Profile (
--     id_customer_p SERIAL PRIMARY KEY ,
--     isLoggedIn BOOLEAN DEFAULT FALSE,
--     customer_id SERIAL,
--     FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
-- )

-- INSERT INTO Customer (first_name, last_name) VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- Insert those customer profiles, use subqueries:
-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO Customer_Profile (isLoggedIn, customer_id)
-- VALUES 
-- (TRUE, (SELECT customer_id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
-- (FALSE, (SELECT customer_id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
-- SELECT * FROM Customer


-- The first_name of the LoggedIn customers
-- The number of customers that are not LoggedIn

-- SELECT c.first_name
-- FROM Customer c
-- JOIN Customer_Profile cp ON c.customer_id = cp.customer_id
-- WHERE cp.isLoggedIn = TRUE

-- SELECT COUNT(*) AS not_logged_in_customers
-- FROM Customer c
-- LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL





-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL
-- )

-- INSERT INTO Book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K. Rowling'),
-- ('To Kill a Mockingbird', 'Harper Lee')


-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL UNIQUE,
--     age INT CHECK (age <= 15)
-- )

-- INSERT INTO Student (name, age) 
-- VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)


-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- CREATE TABLE Library (
-- book_fk_id INT,
-- student_fk_id INT,
-- borrowed_date DATE NOT NULL,
-- PRIMARY KEY (book_fk_id, student_fk_id),
-- FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'John'), 
--  '2022-02-15'),

-- ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), 
--  '2021-03-03'),

-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'Lera'), 
--  '2021-05-23'),

-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), 
--  '2021-08-12')

-- Select all the columns from the junction table
-- Select the name of the student and the title of the borrowed books
-- Delete a student from the Student table, what happened in the junction table ?
-- SELECT * FROM Library

-- SELECT s.name AS student_name, b.title AS book_title, l.borrowed_date
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id


-- DELETE FROM Student WHERE name = 'John'

-- We defined the Library table with ON DELETE CASCADE so John will be deleted from the Student table, 
-- the records in Library table where student_fk_id corresponds to John will also be automatically deleted



