--DOUBLE SELECT + COUNT 

SELECT contest_id, ROUND((COUNT(DISTINCT user_id)/(SELECT COUNT(user_id) FROM Users)::NUMERIC*100)::NUMERIC, 2) AS percentage 
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;