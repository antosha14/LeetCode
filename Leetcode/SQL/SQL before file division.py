from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

POSTGRESS_DATABASE_URL = "postgresql://postgres:admin123@localhost:5000/postgres"
engine = create_engine(POSTGRESS_DATABASE_URL)

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

"""
SELF Join, leaving instanses where a2 is bigger and then aggregating on id
"""
result = connection.execute(
    """
    SELECT a1.machine_id, ROUND(AVG(a2.timestamp-a1.timestamp)::numeric, 3) AS processing_time
    FROM Activity AS a1
    JOIN Activity AS a2 ON a1.machine_id=a2.machine_id      
    AND a1.process_id=a2.process_id
    AND a2.timestamp>a1.timestamp
    GROUP BY a1.machine_id;                       
    """
)

"""METHOD 2 Join on data in columns"""
result = connection.execute(
    """
    SELECT
        t1.machine_id,
        ROUND(AVG(t2.timestamp - t1.timestamp)::NUMERIC, 3) AS processing_time
    FROM Activity t1
    JOIN Activity t2
        ON  t1.activity_type = 'start'
        AND t2.activity_type = 'end'
        AND t1.machine_id = t2.machine_id
        AND t1.process_id = t2.process_id
    GROUP BY
        1                     
    """
)

"""
LEFT JOIN 100% will have all rows from left table, even when AND is not true (value will be null)
So we use where on join result NOT AND
"""
result = connection.execute(
    """
    SELECT e.name, b.bonus FROM Employee AS e
    LEFT JOIN Bonus AS b ON e.empId=b.empID
    WHERE bonus IS NULL OR bonus<1000                            
    """
)

"""
Inner JOIN is farter then left join
"""

result = connection.execute(
    """
    SELECT p.project_id, ROUND(AVG(e.experience_years)::NUMERIC, 2) AS average_years FROM Project AS p
    INNER JOIN Employee AS e ON p.employee_id=e.employee_id
    GROUP BY p.project_id;                         
    """
)
