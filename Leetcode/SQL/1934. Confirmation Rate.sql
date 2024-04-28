--dont use COUNT(action='confirmed')
--USE COUNT(CASE WHEN c.action='confirmed' THEN 1 ELSE null END

SELECT s.user_id, 
COALESCE(ROUND((COUNT(CASE WHEN c.action='confirmed' THEN 1 ELSE null END)::NUMERIC/NULLIF(COUNT(c.action)::NUMERIC,0)::NUMERIC)::NUMERIC, 2), 0) AS confirmation_rate FROM Signups AS s
LEFT JOIN Confirmations AS c ON s.user_id=c.user_id
GROUP BY s.user_id;

/*Optimization using filter*/

select
    user_id,
    round((count(*) filter (where action = 'confirmed') * 1.00 / count(*)* 1.00),2) as "confirmation_rate"
from signups
left join confirmations using(user_id)
group by 1

/*Optimization using average*/
select s.user_id, round(avg(case 
when action = 'confirmed' then 1
else 0 end),2) as confirmation_rate
from signups s left join confirmations c
on s.user_id = c.user_id
group by s.user_id