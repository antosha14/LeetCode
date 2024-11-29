WITH cumul_weight AS(
    SELECT person_id,person_name,weight,turn, SUM(weight) OVER(ORDER BY turn ASC) as total_weight
    FROM Queue
)
SELECT person_name
FROM cumul_weight
WHERE total_weight<=1000
ORDER BY total_weight DESC
LIMIT 1