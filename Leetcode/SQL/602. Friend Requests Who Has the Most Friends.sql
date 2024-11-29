SELECT accepter_id id, COUNT(accepter_id) num FROM (
    SELECT accepter_id FROM RequestAccepted 
    UNION ALL 
    SELECT requester_id accepter_id FROM RequestAccepted 
) a
GROUP BY accepter_id
ORDER BY num DESC
LIMIT 1