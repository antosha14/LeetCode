with cte
as (select player_id, min(event_date) as min_date from Activity
    group by player_id)

select round(count(distinct a.player_id) * 1.0/ count(distinct cte.player_id),2) as fraction from Activity a 
right join cte 
     on a.player_id = cte.player_id and a.event_date = date_add(min_date, INTERVAL '1 day')

Или попроще через IN
SELECT
  ROUND(
    COUNT(A1.player_id)
    / (SELECT COUNT(DISTINCT A3.player_id) FROM Activity A3)
  , 2) AS fraction
FROM
  Activity A1
WHERE
  (A1.player_id, DATE_SUB(A1.event_date, INTERVAL 1 DAY)) IN (
    SELECT
      A2.player_id,
      MIN(A2.event_date)
    FROM
      Activity A2
    GROUP BY
      A2.player_id
  );