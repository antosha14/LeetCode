/*
COUNT(rating<3) doesnt work
AVG + CASE
WHERE ALWAYS in front of group by
*/

SELECT query_name, ROUND((AVG(rating::NUMERIC/position::NUMERIC))::NUMERIC, 2) AS quality,
ROUND(AVG(CASE WHEN rating < 3 THEN 1 ELSE 0 END)::NUMERIC*100,2) AS poor_query_percentage
FROM queries
WHERE query_name IS NOT NULL
GROUP BY query_name;