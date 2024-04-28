SELECT f.name FROM Employee AS f
JOIN Employee AS s ON f.id=s.managerId
GROUP BY f.id, f.name
HAVING COUNT(s.id)>=5;


--Double select appoach
SELECT name FROM Employee
WHERE id IN 
(
SELECT managerId FROM Employee
GROUP BY managerId
HAVING COUNT(managerId) >= 5
)