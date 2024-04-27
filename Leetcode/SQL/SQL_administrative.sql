BACKUP DATABASE databasename
TO DISK = 'filepath'; 

-- Backup with differential backups only changed data
BACKUP DATABASE testDB
TO DISK = 'D:\backups\testDB.bak'
WITH DIFFERENTIAL; 


CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

-- Create copy of a table in new table
CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers; 

DROP TABLE Shippers;

-- to delete data but not table itself
TRUNCATE TABLE table_name; 

ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE Customers
DROP COLUMN Email;

ALTER TABLE table_name
RENAME COLUMN old_name to new_name; 

ALTER TABLE table_name
MODIFY COLUMN column_name datatype; 


-- SQL constraints are used to specify rules for data in a table.
-- Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement.
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);

/*
    NOT NULL - Ensures that a column cannot have a NULL value
    UNIQUE - Ensures that all values in a column are different
    PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
    FOREIGN KEY - Prevents actions that would destroy links between tables
    CHECK - Ensures that the values in a column satisfies a specific condition
    DEFAULT - Sets a default value for a column if no value is specified
    CREATE INDEX - Used to create and retrieve data from the database very quickly
*/

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
); 

ALTER TABLE Persons
ALTER COLUMN Age int NOT NULL; 


CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);


ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName); 

ALTER TABLE Persons
DROP CONSTRAINT UC_Person;

CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
); 

-- naming primary key
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
); 


-- If you use ALTER TABLE to add a primary key, the primary key column(s) must have been declared to not contain NULL values (when the table was first created).
ALTER TABLE Persons
ADD PRIMARY KEY (ID); 

ALTER TABLE Persons
DROP PRIMARY KEY; 

-- If its named
ALTER TABLE Persons
DROP CONSTRAINT PK_Person; 

--In SQL, a view is a virtual table based on the result-set of an SQL statement.
--A view always shows up-to-date data! The database engine recreates the view, every time a user queries it.

CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil'; 

-- We query that view as follows
SELECT * FROM [Brazil Customers]; 

-- To update view
CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil'; 

/* PSQL Data types
Name 	Aliases 	Description
bigint 	int8 	signed eight-byte integer
bigserial 	serial8 	autoincrementing eight-byte integer
bit [ (n) ] 	  	fixed-length bit string
bit varying [ (n) ] 	varbit [ (n) ] 	variable-length bit string
boolean 	bool 	logical Boolean (true/false)
box 	  	rectangular box on a plane
bytea 	  	binary data (“byte array”)
character [ (n) ] 	char [ (n) ] 	fixed-length character string
character varying [ (n) ] 	varchar [ (n) ] 	variable-length character string
cidr 	  	IPv4 or IPv6 network address
circle 	  	circle on a plane
date 	  	calendar date (year, month, day)
double precision 	float8 	double precision floating-point number (8 bytes)
inet 	  	IPv4 or IPv6 host address
integer 	int, int4 	signed four-byte integer
interval [ fields ] [ (p) ] 	  	time span
json 	  	textual JSON data
jsonb 	  	binary JSON data, decomposed
line 	  	infinite line on a plane
lseg 	  	line segment on a plane
macaddr 	  	MAC (Media Access Control) address
macaddr8 	  	MAC (Media Access Control) address (EUI-64 format)
money 	  	currency amount
numeric [ (p, s) ] 	decimal [ (p, s) ] 	exact numeric of selectable precision
path 	  	geometric path on a plane
pg_lsn 	  	PostgreSQL Log Sequence Number
pg_snapshot 	  	user-level transaction ID snapshot
point 	  	geometric point on a plane
polygon 	  	closed geometric path on a plane
real 	float4 	single precision floating-point number (4 bytes)
smallint 	int2 	signed two-byte integer
smallserial 	serial2 	autoincrementing two-byte integer
serial 	serial4 	autoincrementing four-byte integer
text 	  	variable-length character string
time [ (p) ] [ without time zone ] 	  	time of day (no time zone)
time [ (p) ] with time zone 	timetz 	time of day, including time zone
timestamp [ (p) ] [ without time zone ] 	  	date and time (no time zone)
timestamp [ (p) ] with time zone 	timestamptz 	date and time, including time zone
tsquery 	  	text search query
tsvector 	  	text search document
txid_snapshot 	  	user-level transaction ID snapshot (deprecated; see pg_snapshot)
uuid 	  	universally unique identifier
xml 	  	XML data
*/


--OR ""="" is always TRUE.
-- sql parameters to protect from sql injection
txtNam = getRequestString("CustomerName");
txtAdd = getRequestString("Address");
txtCit = getRequestString("City");
txtSQL = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";
db.Execute(txtSQL,txtNam,txtAdd,txtCit);

--PSQL DATE datatypes
/*
Name 	Storage Size 	Description 	Low Value 	High Value 	Resolution
timestamp [ (p) ] [ without time zone ] 	8 bytes 	both date and time 	4713 BC 	5874897 AD 	1 microsecond / 14 digits
timestamp [ (p) ] with time zone 	8 bytes 	both date and time, with time zone 	4713 BC 	5874897 AD 	1 microsecond / 14 digits
interval [ (p) ] 	12 bytes 	time intervals 	-178000000 years 	178000000 years 	1 microsecond / 14 digits
date 	4 bytes 	dates only 	4713 BC 	5874897 AD 	1 day
time [ (p) ] [ without time zone ] 	8 bytes 	times of day only 	00:00:00 	24:00:00 	1 microsecond / 14 digits
time [ (p) ] with time zone 	12 bytes 	times of day only, with time zone 	00:00:00+1459 	24:00:00-1459 	1 microsecond / 14 digits
*/

--The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.
--A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
); 

--Naming and multiple columns foreign key
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
); 

ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID); 

ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder; 

--The CHECK constraint is used to limit the value range that can be placed in a column.
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
); 

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
); 

ALTER TABLE Persons
ADD CHECK (Age>=18); 

ALTER TABLE Persons
DROP CHECK CHK_PersonAge;

--The DEFAULT constraint is used to set a default value for a column.
--The default value will be added to all new records, if no other value is specified.

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
); 

CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
); 

ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes'; 

ALTER TABLE Persons
ALTER City DROP DEFAULT; 

--The CREATE INDEX statement is used to create indexes in tables.
--Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.
--Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.

--duplicates are allowed
CREATE INDEX index_name
ON table_name (column1, column2, ...); 

-- duplicates arent allowed
CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...); 

DROP INDEX index_name ON table_name; 

--Auto increment in psql
CREATE TABLE my_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

--Charlist Wildcard
SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';