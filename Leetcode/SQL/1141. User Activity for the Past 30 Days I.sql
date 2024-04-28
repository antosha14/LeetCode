SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users FROM Activity
WHERE activity_date BETWEEN '2019-06-28' AND '2019-07-27'
GROUP BY activity_date
HAVING COUNT(DISTINCT user_id)>=1


--Date arithmetic
select activity_date as day, count(distinct user_id) as active_users
    from activity 
    where activity_date > DATE '2019-07-27' - INTERVAL '30 DAYS' and activity_date <=  DATE '2019-07-27'
    group by activity_date
    having count(user_id) > 0