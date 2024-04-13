SELECT employee_id FROM Employees
WHERE salary<30000 AND manager_id NOT IN (select employee_id from Employees)
ORDER BY employee_id;