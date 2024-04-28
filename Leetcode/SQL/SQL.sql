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

SELECT p.product_id, COALESCE((ROUND((SUM(u.units::numeric*p.price::numeric)/SUM(u.units)::numeric)::numeric, 2)::numeric), 0) AS average_price FROM Prices AS p
LEFT JOIN UnitsSold AS u ON p.product_id=u.product_id
AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id                          


/*Union adds second selet, ALL to allow dublicates*/
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;

--The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;


--The EXISTS operator is used to test for the existence of any record in a subquery.

--Create table
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

-- The EXISTS operator is used to test for the existence of any record in a subquery.
-- The EXISTS operator returns TRUE if the subquery returns one or more records.
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price = 22); 

--The ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values.

-- To copy all data to a new table
SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;

--Tip: SELECT INTO can also be used to create a new, empty table using the schema of another. Just add a WHERE clause that causes the query to return no data:
SELECT * INTO newtable
FROM oldtable
WHERE 1 = 0; 

SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10); 


--Copy only the German suppliers into "Customers":
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers
WHERE Country='Germany';

--CASE 
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails; 


SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END); 

--SQL IFNULL(), ISNULL(), COALESCE()

CREATE PROCEDURE procedure_name
AS
sql_statement
GO; 
EXEC SelectAllCustomers;


--Procedure with a parametr 
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;
EXEC SelectAllCustomers @City = 'London'; 

CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;


EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP'; 


NULLIF(COUNT(c.action)

select
    user_id,
    round((count(*) filter (where action = 'confirmed') * 1.00 / count(*)* 1.00),2) as "confirmation_rate"
from signups
left join confirmations using(user_id)
group by 1;