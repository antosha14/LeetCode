from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

POSTGRESS_DATABASE_URL = "postgresql://postgres:admin123@localhost:5000/postgres"
engine = create_engine(POSTGRESS_DATABASE_URL)  # Создаём движок

SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)  # Создаём конструктор коннекшнов к базе

Base = declarative_base()  # Класс от которого будут наследовать Модели PSQL

connection = engine.connect()
result = connection.execute("SELECT * FROM users WHERE id > :id", {"id": 5})


result = connection.execute(
    """
    SELECT product_id FROM Products
    WHERE low_fats='Y' AND recyclable='Y';                
    """
)

# 584. Find Customer Referee
result = connection.execute(
    """
    SELECT name FROM Customer
    WHERE NOT referee_id=2 OR referee_id IS null;                      
    """
)


result = connection.execute(
    """
    SELECT DISTINCT author_id AS id FROM Views
    WHERE author_id=viewer_id ORDER BY author_id;           
    """
)

result = connection.execute(
    """
    SELECT tweet_id FROM Tweets
    WHERE length(content)>15;                     
    """
)


result = connection.execute(
    """
    SELECT EmployeeUNI.unique_id, Employees.name FROM EmployeeUNI
    RIGHT JOIN Employees ON EmployeeUNI.id=Employees.id;                           
    """
)


result = connection.execute(
    """
    SELECT p.product_name, year, price FROM Sales
    LEFT JOIN Product AS p ON Sales.product_id=p.product_id;                           
    """
)

result = connection.execute(
    """
    SELECT Visits.customer_id, COUNT(Visits.visit_id) AS count_no_trans FROM Visits
    LEFT JOIN Transactions ON Visits.visit_id=Transactions.visit_id
    WHERE Transactions.transaction_id IS NULL
    GROUP BY Visits.customer_id;                          
    """
)

result = connection.execute(
    """
    SELECT * FROM Cinema
    WHERE MOD(id, 2)=1 AND NOT description ='boring'
    ORDER BY rating DESC;                        
    """
)

# Types in postgress are funny COALESCE to change null values with specified value ::numeric to solve type problems
result = connection.execute(
    """
    SELECT p.product_id, COALESCE((ROUND((SUM(u.units::numeric*p.price::numeric)/SUM(u.units)::numeric)::numeric, 2)::numeric), 0) AS average_price FROM Prices AS p
    LEFT JOIN UnitsSold AS u ON p.product_id=u.product_id
    AND u.purchase_date BETWEEN p.start_date AND p.end_date
    GROUP BY p.product_id                         
    """
)

result = connection.execute(
    """
                            
    """
)
result = connection.execute(
    """
                            
    """
)
result = connection.execute(
    """
                            
    """
)
result = connection.execute(
    """
                            
    """
)
