SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

SELECT DISTINCT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;

SELECT \* FROM Customers
WHERE CustomerID > 80;

SELECT \* FROM Products
ORDER BY Price DESC; (ASC)

SELECT \* FROM Customers
ORDER BY Country ASC, CustomerName DESC;

SELECT \*
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';

SELECT \* FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');

SELECT \* FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';

SELECT \* FROM Customers
WHERE NOT Country = 'Spain';

SELECT \* FROM Customers
WHERE CustomerID NOT BETWEEN 10 AND 60;

SELECT \* FROM Customers
WHERE City NOT IN ('Paris', 'London');

MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column

COUNT doesnt ignore NULL values
If you specify a column name instead of (\*), NULL values will not be counted.

SELECT COUNT(DISTINCT Price)
FROM Products;

SELECT COUNT(\*) AS [Number of records]
FROM Products;

INNER is the default join type for JOIN, so when you write JOIN the parser actually writes INNER JOIN

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO table_name
VALUES (value1, value2, value3, ...);

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

# to insert multiple rows of data

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');

# TOP

SELECT TOP 3 \* FROM Customers;

# Limit

SELECT \* FROM Customers
LIMIT 3;

# Percent

SELECT TOP 50 PERCENT \* FROM Customers;

# Sum can take expressions as parametr

SELECT SUM(Quantity \* 10)
FROM OrderDetails;

SELECT SUM(Price \* Quantity)
FROM OrderDetails
LEFT JOIN Products ON OrderDetails.ProductID = Products.ProductID;

SELECT \* FROM Products
WHERE price > (SELECT AVG(price) FROM Products);

# REGEX

The percent sign % represents zero, one, or multiple characters
The underscore sign \_ represents one, single character

SELECT \* FROM Customers
WHERE city LIKE 'L_nd\_\_';

# Ends with

SELECT \* FROM Customers
WHERE CustomerName LIKE '%a';

SELECT \* FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT \* FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste'

DELETE FROM table_name;

DROP TABLE Customers;

SELECT \* FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT \* FROM Products
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;

SELECT \* FROM Orders
WHERE OrderDate BETWEEN #07/01/1996# AND #07/31/1996#;
