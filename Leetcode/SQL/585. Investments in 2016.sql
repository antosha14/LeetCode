select round(sum(tc.tiv_2016)::numeric, 2) as tiv_2016   from Insurance tc 
where tc.tiv_2015 in
(
select tc2.tiv_2015 from Insurance tc2 group by tc2.tiv_2015 having count(tc2.tiv_2015) > 1
)
and (tc.lat,tc.lon) in 
(select ll2.lat, ll2.lon from Insurance ll2 group by ll2.lat, ll2.lon having count(*) = 1)


-------------------------------------------------------------------------------------------------

SELECT ROUND(SUM(tiv_2016):: NUMERIC,2) AS tiv_2016
FROM Insurance 
WHERE tiv_2015 in(SELECT tiv_2015 FROM Insurance
GROUP BY tiv_2015
HAVING  COUNT(*) > 1)
AND (lat, lon) IN (SELECT lat, lon FROM Insurance
GROUP BY lat, lon 
HAVING COUNT(*) = 1);